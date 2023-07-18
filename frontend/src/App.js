import React, {useState} from 'react';

import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Dashboard from './Components/DashBoard';
import aboutimage from './images/seme2.png';
import aboutimage1 from './images/download.png';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';




function App() {
  
  
  return (
    <div className="App">
    
      <Navbar/>
      <Header/>
      <Feature/>
      
      
      
        
      
      
      <About image={aboutimage} title='Sharing is caring' button='Get the App'/>
      <Dashboard/>
      <About image={aboutimage1} title='Download and Get te App now' button='Download'/>
      <Contact/>
    
      
    </div>
  );
}

export default App;
