import './App.css'
import { MapContainer, TileLayer } from 'react-leaflet'
function App() {
  return (<>
  <section id="hero">
    
    <div className="hero-content">
      <h1 className="title-button">
  What is Shannon Sharing?
</h1>
      <p>
  A living network for community knowledge, exchange, and participation.
</p>

    </div>
  </section>
  <section id="map-section">
  
  <div className="map-placeholder">
    <MapContainer
center={[52.709, -8.879]}
zoom={13}
  scrollWheelZoom={false}
  doubleClickZoom={true}

  whenReady={(map) => {
    setTimeout(() => {
      map.target.invalidateSize()
    }, 300)
  }}

  style={{ height: '100%', width: '100%' }}
>
  <TileLayer
    attribution='&copy; OpenStreetMap contributors'

  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
/>

</MapContainer>

  
</div>
  
</section>

</>
  )
}

export default App
