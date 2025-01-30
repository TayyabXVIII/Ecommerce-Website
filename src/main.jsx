import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './redux/Store.js'
import './style.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
</Provider>
)