import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const LocalMap = () => {
    return (
        <div>
    <p>Local map</p>
    <div id="map" style={{height:'180px'}}>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:'180px'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
    
</div>
    )
}
export default LocalMap;