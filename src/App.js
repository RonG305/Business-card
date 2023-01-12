import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

const App = () => (
    <div className="app-content">
        <Header />
        <About />
        <Interests />
        <Footer />
    </div>

    );

export default App;
