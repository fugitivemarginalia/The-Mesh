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
  center={[52.703, -8.864]}
  zoom={11}
  scrollWheelZoom={false}
   doubleClickZoom={true}
  style={{ height: '100%', width: '100%' }}
>

  <TileLayer
    attribution='&copy; OpenStreetMap contributors'
     url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
/>

</MapContainer>

  <div className="floating-card">
    <h3>River Walk</h3>
    <p>
      Paths, stories, habitats, and local observations connected
    to the estuary edge.
    </p>
  </div>
  <div className="connection-line"></div>
  
</div>
  
</section>

</>
  )
}

export default App
