import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return <div className='App'>  
    
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Contact/>
    <Footer/>
    
  </div>;
}

export default App;
