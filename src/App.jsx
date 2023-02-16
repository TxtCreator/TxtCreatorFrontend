import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./pages/NoPage.jsx";
import Creator from "./pages/Creator.jsx";
import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import MenuCreator from "./pages/MenuCreator.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="menu-creator" element={<MenuCreator />}/>
                  <Route path="creator/:version" element={<Creator />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NoPage />} />
              </Routes>
              {/*<Footer />*/}
          </BrowserRouter>
      </>
  )
}

export default App
