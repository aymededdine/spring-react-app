import React from 'react';
import './App.css';

import { HomePage } from './Homepage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <HomePage />
    <Footer />
    </div>
  );
 }
export default App;
