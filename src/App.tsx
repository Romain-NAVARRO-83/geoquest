// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
import Header from './components/Header';
import ReactMap from './components/UseGeolocation'
// import geoloc from './lib/geoloc';

// const [currentLocation, setCurrentLocation] = useState(null);
import './App.css'



function App() {
  { 
  return (
    <>
    
    <Header  />
    <ReactMap />
    <div>
    {/* <p>Position : {currentPosition.latitude} / {currentPosition.longitude}</p>
    <p>Accuracy : {currentPosition.accuracy}</p> */}

    
   </div>
 
  
    
    </>
  )
}
}
export default App
