import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const title = 'The Wine Cave';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
