import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./pages/NoPage.jsx";
import Creator from "./pages/Creator.jsx";
import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="creator" element={<Creator />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NoPage />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </>
  )
}

export default App
