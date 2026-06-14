import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Ear, Footprints, Sprout, Shell } from 'lucide-react'
function App() {
  return (<>
 <div className="controls">
  <button className="hear">
    <Ear className="icon icon-hear" />
    <span className="label">Hear</span>
  </button>

  <button className="tell">
  < Shell className="icon icon-tell" />   
    <span className="label">Tell</span>
  </button>

  <button className="walk">
   <Footprints className="icon icon-walk" />
    <span className="label">Walk</span>
  </button>

  <button className="tend">
   <Sprout className="icon icon-tend" />
   <span className="label">Tend</span>
  </button>
</div>
  
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
    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  />

</MapContainer>
                  </>
    )
}



export default App
