import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./Pages/NoPage.jsx";
import Creator from "./Pages/Creator.jsx";
import React from "react";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="creator/:version" element={<Creator />} />
            <Route path="*" element={ <NoPage /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
