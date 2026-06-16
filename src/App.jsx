import './App.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import { Ear, Footprints, Sprout, Shell } from 'lucide-react'
import VerbPortal from './VerbPortal'
import { CircleMarker } from 'react-leaflet'

function MeshForm({ verb, location, onCancel, onSave }) {
  const config = {
    hear: {
      q1: 'what reached your attention?',
      q1tags: ['Birdsong','Wind','Water','Machinery','Traffic','Voices','Silence','Music','Aircraft','Animal sounds','Unknown'],
      q2: 'what kind of sound was it?',
      q2tags: ['Human','Nonhuman','Mechanical','Natural','Mixed','Unknown'],
      placeholder: 'Unexpected silence compared with yesterday',
      save: 'record encounter'
    },
    tell: {
      q1: 'what are you bringing into the field?',
      q1tags: ['Memory','Story','Encounter','History','Biodiversity','Walk','Folklore','Change','Concern','Discovery','Unknown'],
      q2: 'what kind of relation does it hold?',
      q2tags: ['Human','Nonhuman','Ecological','Historical','Personal','Collective','Seasonal','Unexpected','Everyday','Disappearing','Emerging','Unknown'],
      placeholder: 'what became possible here?',
      save: 'record tale '
    },
    walk: {
  q1: 'what kind of movement brought you here?',
  q1tags: [
    'Routine',
    'Exploration',
    'Exercise',
    'Journey',
    'Commute',
    'Wandering',
    'Social',
    'Pilgrimage',
    'Observation',
    'Errand',
    'Return',
    'Unknown'
  ],
  q2: 'what shaped this movement?',
  q2tags: [
    'Habit',
    'Landscape',
    'Weather',
    'Community',
    'Necessity',
    'Curiosity',
    'Memory',
    'Access',
    'Nature',
    'Infrastructure',
    'Chance',
    'Unknown'
  ],
  placeholder: 'describe the path and what emerged along the way',
  save: 'record walk'
},
   tend: {
  q1: 'what kind of care entered this place?',
  q1tags: [
    'Repair',
    'Planting',
    'Cleaning',
    'Helping',
    'Restoration',
    'Protection',
    'Maintenance',
    'Teaching',
    'Healing',
    'Supporting',
    'Watching',
    'Unknown'
  ],
  q2: 'what was being sustained?',
  q2tags: [
    'Habitat',
    'Community',
    'Water',
    'Wildlife',
    'Memory',
    'Shared Space',
    'Landscape',
    'Infrastructure',
    'Relationships',
    'Knowledge',
    'Future',
    'Unknown'
  ],
  placeholder: 'describe what was cared for and why it matters here',
  save: 'record care'
} 
  }

  const q = config[verb] || config.hear
  const [noticed, setNoticed] = useState([])
  const [soundType, setSoundType] = useState([])
  const [note, setNote] = useState('')
  const toggle = (list, setList, value) => {
    setList(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
  }
  const handleSave = () => {
    onSave({
      id: Date.now(),
      portal: verb,
      coordinates: { lat: location.lat, lng: location.lng },
      noticed,
      soundType,
      note,
    })
  }

  return (
    <div className="encounter-form">
      <button className="encounter-close" onClick={onCancel}>✖</button>
      <p className="form-question">{q.q1}</p>

<div className="tag-grid">
  {q.q1tags.map(tag => (
    <button
      key={tag}
      className={`tag ${noticed.includes(tag) ? 'tag-active' : ''}`}
      onClick={() => toggle(noticed, setNoticed, tag)}
    >
      {tag}
    </button>
  ))}
</div>

<p className="form-question">{q.q2}</p>

<div className="tag-grid">
  {q.q2tags.map(tag => (
    <button
      key={tag}
      className={`tag ${soundType.includes(tag) ? 'tag-active' : ''}`}
      onClick={() => toggle(soundType, setSoundType, tag)}
    >
      {tag}
    </button>
  ))}
</div>

<textarea
  className="form-text"
  placeholder={q.placeholder}
  maxLength={120}
  value={note}
  onChange={e => setNote(e.target.value)}
/>

<button className="form-save" onClick={handleSave}>
  {q.save}
</button>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState('landing')
  const [selectedVerb, setSelectedVerb] = useState(null)
  const [pendingLocation, setPendingLocation] = useState(null)
  const [proposedLocation, setProposedLocation] = useState(null)
  const [encounters, setEncounters] = useState(() => {
  const saved = localStorage.getItem('mesh-encounters')
  return saved ? JSON.parse(saved) : []
})
  const [activeEncounter, setActiveEncounter] = useState(null)
  const [mapRef, setMapRef] = useState(null)
function MapClickHandler() {
  useMapEvents({
    click(e) {
      if (mode === 'chooseLocation') {
        setProposedLocation(e.latlng)
      }
    }
  })
  return null
}
  return (<>

  {mode === 'landing' && (
  <div className="landing">
    <h1 className="landing-title">shannon</h1>
  <p className="landing-sub">a networked encounter with place</p>
<button className="landing-enter" onClick={() => setMode('encounter')}>enter the fold</button>  
  </div>
)}
 
 {mode === 'encounter' && <button className="encounter-close" onClick={() => { setMode('landing'); setSelectedVerb(null) }}>✖</button>}
{mode === 'encounter' && <div className="controls">

<button className={`hear ${selectedVerb === 'hear' ? 'foreground' : selectedVerb ? 'dimmed' : ''}`}
onClick={() => { setSelectedVerb('hear'); setMode('portal') }} >

    <Ear className="icon icon-hear" />
    <span className="label">Hear</span>
  </button>

<button

  className={`tell ${selectedVerb === 'tell' ? 'foreground' : selectedVerb ? 'dimmed' : ''}`}
onClick={() => { setSelectedVerb('tell'); setMode('portal') }}
>
  <Shell className="icon icon-tell" />   
    <span className="label">Tell</span>
  </button>
<button
  className={`walk ${selectedVerb === 'walk' ? 'foreground' : selectedVerb ? 'dimmed' : ''}`}
onClick={() => { setSelectedVerb('walk'); setMode('portal') }}
>
   <Footprints className="icon icon-walk" />
    <span className="label">Walk</span>
  </button>
  <button
  className={`tend ${selectedVerb === 'tend' ? 'foreground' : selectedVerb ? 'dimmed' : ''}`}
  onClick={() => { setSelectedVerb('tend'); setMode('portal') }}
>
  
   <Sprout className="icon icon-tend" />
   <span className="label">Tend</span>
  </button>
</div>}
  {mode === 'portal' && (
  <VerbPortal
    verb={selectedVerb}
  onEnter={() => { setMode('chooseLocation'); setPendingLocation(null); setProposedLocation(null) }}
   onExit={() => { setMode('encounter'); setSelectedVerb(null); setPendingLocation(null) }}
    
  />
)}{mode === 'chooseLocation' && (
  <>
    <button className="encounter-close" onClick={() => { setMode('encounter'); setSelectedVerb(null) }}>✖</button>
    <div className="location-fade" />
   {!proposedLocation && (
      <div className="placement-hint">tap the map to place your encounter</div>
    )}
    {proposedLocation && !pendingLocation && (
      <div className="placement-confirm">
        <button className="confirm-place" onClick={() => setPendingLocation(proposedLocation)}>place here</button>
        
      </div>
    )}
    {pendingLocation && (
      <MeshForm
  verb={selectedVerb}
  location={pendingLocation}
  onCancel={() => { setMode('encounter'); setSelectedVerb(null); setPendingLocation(null); setProposedLocation(null) }}
  onSave={(encounter) => {
  setEncounters(prev => {
  const updated = [...prev, encounter]
  localStorage.setItem('mesh-encounters', JSON.stringify(updated))
  return updated
})
    setMode('explore')
    setSelectedVerb(null)
    setPendingLocation(null)
    setProposedLocation(null)
  }}
/>
    )}
  </>
)}

<MapContainer
  center={[52.711114, -8.877]}
  zoom={15}
  scrollWheelZoom={false}
  doubleClickZoom={true}

  whenReady={(map) => {
    setTimeout(() => {
      map.target.invalidateSize()
    }, 300)
  }}

  style={{
    height: '100vh',
    width: '100vw'
  }}
>

  <TileLayer
    
 attribution='&copy; OpenStreetMap contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  className="dark-tiles"
/>
{activeEncounter && (
  <div className="encounter-card">
    <button className="encounter-close" onClick={() => setActiveEncounter(null)}>✖</button>
    <p className="card-portal">{activeEncounter.portal}</p>
    <p className="card-location">{activeEncounter.coordinates.lat.toFixed(4)}, {activeEncounter.coordinates.lng.toFixed(4)}</p>
    <div className="tag-grid">
      {activeEncounter.noticed.map(t => <span key={t} className="tag tag-active">{t}</span>)}
    </div>
    <div className="tag-grid">
      {activeEncounter.soundType.map(t => <span key={t} className="tag tag-active">{t}</span>)}
    </div>
    {activeEncounter.note && <p className="card-note">{activeEncounter.note}</p>}
  </div>
)}
{mode === 'chooseLocation' && proposedLocation && (
  <CircleMarker
    center={[proposedLocation.lat, proposedLocation.lng]}
    radius={8}
    pathOptions={{
      color: 'white',
      fillColor: 'white',
      fillOpacity: 0.8
    }}
  />
)}{encounters.map(enc => (
  <CircleMarker
    key={enc.id}
    center={[enc.coordinates.lat, enc.coordinates.lng]}
    radius={8}
    pathOptions={{
      color: 'rgba(255, 211, 100, 0.8)',
      fillColor: 'rgba(255, 211, 100, 0.6)',
      fillOpacity: 1
    }}
    eventHandlers={{
      click: () => setActiveEncounter(enc)
    }}
  />
))}
<MapClickHandler />



</MapContainer>
                  </>
    )

  }


export default App
