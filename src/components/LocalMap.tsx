import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { ICurrentPosition } from '../@types/currentPosition';
import { LatLng, LatLngExpression } from 'leaflet';
import { IQuest } from '../@types/quest';
// import { LatLng } from 'leaflet';
interface ILocalMap{
  currentPosition: ICurrentPosition;
  allQuests: IQuest;
}
const LocalMap = ({currentPosition, allQuests}:ILocalMap) => {
  const myLat = parseFloat(Number(currentPosition.latitude).toFixed(6));
  const myLong = parseFloat(Number(currentPosition.longitude).toFixed(6));
  const position = new LatLng(myLat, myLong)
    return (
        <div>
    <p>{JSON.stringify(myLat)}</p>
    <div id="map" style={{height:'300px'}}>
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} style={{height:'300px'}} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  {/* Quests markers */}
  {allQuests.map((quest) => {
return(
      <Marker key={quest.id} position={[quest.latitude, quest.longitude]}>
    <Popup>{quest.name}</Popup>
  </Marker>
    )
  })}
</MapContainer>
    </div>
    
</div>
    )
}
export default LocalMap;