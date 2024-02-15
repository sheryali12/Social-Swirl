import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Collection from './pages/Collection';
import Learning from './pages/Learning';
import About from './pages/About';
import Courses from './pages/Courses';
import Footer from './pages/Footer';
import Contact from './pages/Contact';




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
