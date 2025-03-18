import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductState from './context/ProductState.jsx'

createRoot(document.getElementById('root')).render(
    <ProductState>
    <App />
    </ProductState>

)
