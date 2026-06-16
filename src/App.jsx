import './App.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import { Ear, Footprints, Sprout, Shell } from 'lucide-react'
import VerbPortal from './VerbPortal'
import { CircleMarker } from 'react-leaflet'
function MeshForm({ verb, location, onCancel }) {
  return (
    <div className="encounter-form">
      <button className="encounter-close" onClick={onCancel}>✖</button>
      <h2 className="form-verb">{verb}</h2>
      <p className="form-location">{location.lat.toFixed(4)}, {location.lng.toFixed(4)}</p>
      <textarea className="form-text" placeholder="what did you encounter here?" />
      <button className="form-save">save encounter</button>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState('landing')
  const [selectedVerb, setSelectedVerb] = useState(null)
  const [pendingLocation, setPendingLocation] = useState(null)
  const [proposedLocation, setProposedLocation] = useState(null)

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
    onEnter={() => { setMode('chooseLocation'); setPendingLocation(null) }}  
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
)}
<MapClickHandler />



</MapContainer>
                  </>
    )

  }


export default App
