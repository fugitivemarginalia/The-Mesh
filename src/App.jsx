import './App.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Ear, Footprints, Sprout, Shell } from 'lucide-react'
import VerbPortal from './VerbPortal'
function App() {
  const [mode, setMode] = useState('explore')
  const [selectedVerb, setSelectedVerb] = useState(null)
  return (<>
 {mode === 'explore' && <button className="encounter-trigger" onClick={() => { setMode('encounter'); setSelectedVerb(null) }}>Enter</button>}
 {mode === 'encounter' && <div className="controls">
  
<button className="encounter-close" onClick={() => setMode('explore')}>✕</button>

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
    onEnter={() => setMode('chooseLocation')}use
    onExit={() => { setMode('explore'); setSelectedVerb(null) }}
    
  />
)}{mode === 'chooseLocation' && (
  <button className="encounter-close" onClick={() => setMode('encounter')}>✕</button>
)}
{mode === 'portal' && (
  <VerbPortal
    verb={selectedVerb}
    onEnter={() => setMode('chooseLocation')}
    onExit={() => { setMode('explore'); setSelectedVerb(null) }}
  />
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



</MapContainer>
                  </>
    )
}



export default App
