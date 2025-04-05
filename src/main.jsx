import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './components/App.jsx'
import Counter from './components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
  </StrictMode>,
)
