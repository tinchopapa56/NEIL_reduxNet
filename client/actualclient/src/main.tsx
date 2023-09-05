import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ruter } from './app/router/Routes'
import App from './app/layout/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={ruter} /> */}
  </React.StrictMode>,
)
