import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './roots/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import '../presentation/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
