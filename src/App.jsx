import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./Pages/NoPage.jsx";
import Creator from "./Pages/Creator.jsx";
import React from "react";
import Home from "./Pages/Home.jsx";
import ComponentNavbar from "./Components/Navbar.jsx";


function App() {
  return (
      <div>
          <BrowserRouter>
              <ComponentNavbar />
              <Routes>
                  <Route path="/" element={ <Home /> }/>
                  <Route path="creator/:version" element={<Creator />} />
                  <Route path="*" element={ <NoPage /> } />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
