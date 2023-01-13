import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import './navBar.css'

// import logo from '../../assets/img/logo.svg';

import icon1  from '../../assets/img/nav-icon1.svg';
import icon2 from '../../assets/img/nav-icon2.svg';
import icon3 from '../../assets/img/nav-icon3.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>      
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-center">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Sobre</Nav.Link>
              <Nav.Link href="#courses" className={activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('courses')}>Cursos</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Habilidades</Nav.Link>
              <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Projetos</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contato</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/diegopereira-dev/"><img src={icon1} alt="Linkedin" /></a>
                <a href="https://github.com/Sancttus"><img src={icon2} alt="GitHub" /></a>
                <a href="https://www.instagram.com/diigowsp/"><img src={icon3} alt="Instagram" /></a>
              </div>   
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}