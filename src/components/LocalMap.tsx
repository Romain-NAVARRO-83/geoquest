import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { ICurrentPosition } from '../@types/currentPosition';
interface ILocalMap{
  currentPosition: ICurrentPosition;
}
const LocalMap = ({currentPosition}:ILocalMap) => {
  const myLat = parseFloat(Number(currentPosition.latitude).toFixed(6));
  const myLong = parseFloat(Number(currentPosition.longitude).toFixed(6));
    return (
        <div>
    <p>{JSON.stringify(myLat)}</p>
    <div id="map" style={{height:'180px'}}>
    <MapContainer center={[parseFloat(Number(currentPosition.longitude).toFixed(2)), myLong]} zoom={1} scrollWheelZoom={false} style={{height:'180px'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[myLat, myLong]}>
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