import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Injecting App component in the div element with id 'root'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
