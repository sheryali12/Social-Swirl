import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './pages/Navbar/navbar';
import Learning from './pages/E-Learning/Learning';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/home';
import Business from './pages/Business/Business';
import Internship from './pages/Internships/Internship';
import RemoteJobs from './pages/RemoteJobs/RemoteJobs';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
       
        {/* careers */}
        <Route path="/internship" element={<Internship />} />
        <Route path="/jobs"       element={<RemoteJobs />} />
         {/*  */}

         <Route path="/business" element={<Business />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
