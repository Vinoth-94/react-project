import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// var h1=document.createElement("h1")
// h1.innerText="hi world2"
// var root:any|Node =document.getElementById("root")
// root.appendChild(h1)