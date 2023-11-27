
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import { ContextProvider } from "./Components/utils/global.context";



function App() {
  return (
      <ContextProvider>
        <Router>
          <React.Fragment>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/favs" element={<Favs/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/detail" element={<Detail/>} />
              <Route path='' element={()=> <h1>NO FUNCIONA HERMANO</h1>} />
            </Routes>
            <Footer/>
          </React.Fragment>
        </Router> 
      </ContextProvider>
  )
}

export default App;
