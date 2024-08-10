import useGeolocation from "../../@/hooks/useGeolocation";
import LocalMap from './LocalMap';
import IQuest from '../@types/quest';
interface IReactMapProps{
  allQuests:IQuest[];
}
export default function ReactMap({allQuests}:IReactMapProps) {
  const {
    loading,
    accuracy,
    latitude,
    longitude,
    altitude,
    altitudeAccuracy,
    heading,
    speed,
    timestamp,
    error,
  } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
  });
  const currentPosition = {
    loading,
    accuracy,
    latitude,
    longitude,
    altitude,
    altitudeAccuracy,
    heading,
    speed,
    timestamp,
    error,
  };
  console.log(currentPosition);
  return (
    
    
    
    <LocalMap currentPosition={currentPosition} allQuests={allQuests}/> 
  );
}