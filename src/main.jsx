import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import './index.css'
//import 'bootstrap/dist/css/bootstrap.css';
import "./styles/theme.scss" 
import "bootstrap/dist/js/bootstrap.js"

import App from './App.jsx'
import { UserProvider } from './context/authenticationContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
