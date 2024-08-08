
import { createRoot } from 'react-dom/client'
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet/src/Leaflet.js'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(

    <App />
)
