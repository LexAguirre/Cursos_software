import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './routes/App'
import Char from './routes/Char'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/char/:charId" element={<Char />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
