import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Pour importer bootstrap Css
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Pour utiliser les fonctionnalités dynamique de bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
