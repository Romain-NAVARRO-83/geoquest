// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import LocalMap from './components/LocalMap'
import UseGeolocation from './components/UseGeolocation'
// import geoloc from './lib/geoloc';


import './App.css'


function App() {
  { 
  return (
    <>
    
    <Header  />
    <UseGeolocation />
    <div>
    {/* <p>Position : {currentPosition.latitude} / {currentPosition.longitude}</p>
    <p>Accuracy : {currentPosition.accuracy}</p> */}

    
   </div>
    <LocalMap />
  
    
    </>
  )
}
}
export default App
