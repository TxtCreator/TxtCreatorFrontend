import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./Pages/NoPage.jsx";
import Creator from "./Pages/Creator.jsx";
import React from "react";
import Home from "./Pages/Home.jsx";
import ComponentNavbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";


function App() {
  return (
      <>
          <BrowserRouter>
              <ComponentNavbar />
              <Routes>
                  <Route path="/" element={ <Home /> }/>
                  <Route path="creator/:version" element={<Creator />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={ <NoPage /> } />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
