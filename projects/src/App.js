import React from 'react';
import Navbar from './pages/home/components/navbar/navbar';
import Main from './pages/home/components/main/main';
import Footer from './pages/home/components/footer/footer';

// Import css classes
import './App.css';
import './AppVars.css';

function App() {
  return (
    <div className="page-content">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
