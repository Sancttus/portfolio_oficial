//react
import React from "react";
//css
import './about.css';
//image
import Me from '../../assets/img/Me.jpeg'



const About = () => {
  return (
    <section id="about">
      
      <h2>Sobre</h2>

      <div className="container about_container">
        <div data-aos="flip-left" className="about_me" >
          <div className="about_me-image">
            <img className="Me" src={Me} alt="About me" />
          </div>
        </div>

        <div data-aos="flip-right" className="about_content">
          <p>
            Olá! Meu nome é<strong> DIEGO PEREIRA</strong>, sempre fui fascinado pelo mundo da tecnologia e em resolver problemas.
            Atualmente estou estudando tecnologia da informação pela UNIFACS, e estou em transição de carreira.<br />
            <br />
            Estou em busca de uma oportunidade na área de front end, para aprimorar meus conhecimentos e desenvolvimento pessoal.
          </p>
          <a href="#contact" className="btn btn-primary">Entre em Contato</a>
        </div>

      </div>
    </section>
  );
}

export default About;