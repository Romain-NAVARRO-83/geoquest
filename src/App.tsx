// import dotenv from 'dotenv';
// dotenv.config();
import Header from './components/Header';
import ReactMap from './components/UseGeolocation';

// import useGeolocation from "../@/hooks/useGeolocation";

// import geoloc from './lib/geoloc';

// const [currentLocation, setCurrentLocation] = useState(null);
import './App.css'
import { useEffect, useState } from 'react';
import { IQuest } from './@types/quest';

import axios from 'axios';

function App() {
  // Get all quests
  const [allQuests, setAllQuests] = useState<IQuest[]>([]);
  useEffect(() => {
    const fetchQuests = async ()=>{
      try{
        const response = await axios.get(`http://localhost:5000/quests`);
        const questsArray = response.data;
        console.log(questsArray);
        setAllQuests(questsArray);
      }catch(e){
        console.log('erreur' + e);
      }
    };
    fetchQuests();
  },[]);
  // Get user location
  
  return (
    <>
    
    <Header  />
    {/* {JSON.stringify(allQuests)} */}
    <ReactMap allQuests={allQuests}/>
    <div>
    {/* <p>Position : {currentPosition.latitude} / {currentPosition.longitude}</p>
    <p>Accuracy : {currentPosition.accuracy}</p> */}

    
   </div>
 
  
    
    </>
  )
// }
}
export default App
