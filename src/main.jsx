import * as ReactDOM from 'react-dom/client'
import React from "react"
import "./assets/style.css"
import App from "./App"

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>);