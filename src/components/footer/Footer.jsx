
import React from "react";
import './footer.css';
import {RiLinkedinFill} from 'react-icons/ri'
import {FaGithubAlt} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return ( 
       <footer>
        <a href="#home" className="footer_logo">DiegoPeireira</a>
       <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#courses">Cursos</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Projetos</a></li>    
        
       </ul>

       <div className="footer_socials">
        <a href="https://www.linkedin.com/in/diegopereira-dev/"><RiLinkedinFill className="img"/></a>
        <a href="https://github.com/Sancttus"><FaGithubAlt className="img"/></a>
        <a href="https://www.instagram.com/diigowsp/"><FiInstagram className="img"/></a>
        
       </div>
       <div className="footer_copyright">
        <small>	&copy;DiegoPereira. todos os direitos reservados </small>
       </div>
       </footer>
     );
}
 

export default Footer;