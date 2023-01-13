
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/NavBar';
import Header from './components/header/Header';
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio';
import Courses from './components/courses/Courses';

import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
   
      <NavBar />
      <Header />
      <About/>
      <Courses/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
