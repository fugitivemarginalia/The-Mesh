import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
function App() {
  return (<>
 <div className="controls">

  <button className="hear">Hear</button>

  <button className="hold">Hold</button>

  <button className="walk">Walk</button>

  <button className="tend">Tend</button>

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
