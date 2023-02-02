import React from "react";

import './courses.css'
//icons
import { FaAward } from 'react-icons/fa'

//certificados
import certificadoWeb from '../../assets/img/web.jpeg'
import cursoReact from '../../assets/img/curso_react.jpeg'
import certificadoNext from '../../assets/img/Next.jpg'
import Java from '../../assets/img/java.jpg'
import BootcampSantander from '../../assets/img/SantanderBootcamp.jpeg'
import BootcampInter from '../../assets/img/InterBootcamp.jpeg'

const Courses = () => {


    <script>
        AOS.init();
    </script>


    return (
        <section id="courses">

            <h2> Cursos </h2>
            <div className="container courses_content">
                <div className="courses_cards">
                    <article data-aos="fade-right" className="courses_card">

                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>Desenvolvimento Web Completo</h4>
                            <h5>Conteúdo: Html5, Css3, Sass, Bootstrap, Js, Es6, Php7, OO, MySQL, Jquery,Apis</h5>
                            <h6>Horas: 114,5 horas</h6>
                        </div>
                            <a href={certificadoWeb} download className='btn btn-primary'>Download Certificado</a>
                    </article>

                    <article data-aos="fade-up" className="courses_card">

                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>React do Zero a Maestria </h4>
                            <h5>Conteúdo: Fundamentos do React, Jsx, React Router, Context Api, Hooks, Redux</h5>
                            <h6>Horas: 30 horas</h6>
                        </div>

                        <a href={cursoReact} download className='btn btn-primary'>Download Certificado</a>

                    </article>

                    <article data-aos="fade-left" className="courses_card">
                        
                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>Next.js e React</h4>
                            <h5>Conteúdo: jsx, Typescript, Deploy na Núvem, Tailwind CSS, Router, SSR, SPA, SSG, Api, React, Componentização</h5>
                            <h6>Horas: 30 horas</h6>
                        </div>
                            <a href={certificadoNext} download className='btn btn-primary'>Download Certificado</a>
                    </article>

                    <article data-aos="fade-right" className="courses_card">
                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>Java 2022 completo</h4>
                            <h5>Conteúdo: Fundamentos Java, OO, MySQL, MongoDB, Spring Boot, JavaFX, JPA, Hibernate</h5>
                            <h6>Horas: 77 horas</h6>
                        </div>
                            <a href={Java} download className='btn btn-primary'>Download Certificado</a>

                    </article>

                    <article data-aos="fade-down" className="courses_card">

                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>Santander Bootcamp Fullstack Developer</h4>
                            <h5>Conteúdo:  html5, Css3, Js, Angular, Java, Spring Framework</h5>
                            <h6>Horas: 120 horas</h6>
                        </div>
                            <a href={BootcampSantander} download className='btn btn-primary'>Download Certificado</a>
                    </article>

                    <article data-aos="fade-left" className="courses_card">

                        <FaAward className="courses_icon" />

                        <div className="courses_titles">
                            <h4>Inter Frontend Developer</h4>
                            <h5>Conteúdo: Git, github, Html5, Css3, Bootstrap, Js, SQLserver,Apis</h5>
                            <h6>Horas: 99 horas</h6>
                        </div>
                            <a href={BootcampInter} download className='btn btn-primary'>Download Certificado</a>

                    </article>
                </div>
            </div>


        </section>
    );

}
export default Courses;