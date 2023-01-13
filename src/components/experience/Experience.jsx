import React from "react";
//css
import './experience.css';
//icon

import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
 
    return (

        <section id="experience">
            
            <h2>Habilidades</h2>
            <div className="container experience_container">
                <div data-aos="fade-down-right" className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Html</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Css</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Javascript</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>React</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Next.js</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Tailwind</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Bootstrap</h4>

                            </div>
                        </article>
                    </div>
                </div>
                <div data-aos="fade-down-left" className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Php</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Java</h4>

                            </div>
                        </article>

                    </div>
                </div>
                <div data-aos="fade-down-right" className="experience_tools">
                    <h3>Tools Development</h3>
                    <div className="experience_content">

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>GitHub</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Git</h4>

                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Docker</h4>

                            </div>
                        </article>




                    </div>
                </div>
                <div data-aos="fade-down-left" className="experience_SGBD">
                    <h3>SGBD Development</h3>
                    <div className="experience_content">

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>MongoDB</h4>

                            </div>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>mySQL</h4>

                            </div>
                        </article>

                    </div>
                </div>
            </div>

        </section>

    );
}

export default Experience;