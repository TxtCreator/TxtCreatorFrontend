import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client'
import React from "react"

import App from "./App"
import NoPage from "./NoPage"

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <App /> } />
            <Route path="*" element={ <NoPage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)