import Carousel from 'react-bootstrap/Carousel';

import './carroselCourses.css'

import { BsPatchCheckFill } from 'react-icons/bs'


function IndividualIntervalsExample() {
    return (
        <section id='experience'>

            <h2>Habilidades</h2>

            <div className="container">

                <Carousel>
                 
                    <Carousel.Item interval={1000}>               
                        
                            
                           
                        <div className="experience_container" >
                       
                        <div className='experience_title'>
                                    <h3>Frontend Development</h3>
                        </div>
                            <div className="experience_content">

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Html</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Css</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Javascript</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>React</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Next.js</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Tailwind</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Bootstrap</h4>
                                </article>

                            </div>                           
                        </div>
                    </Carousel.Item >


                    <Carousel.Item interval={800}>

                        <div className="experience_container" >
                                 <div className='experience_title'>
                                    <h3>Backend Development</h3>
                                </div>
                            <div className="experience_content">
                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Php</h4>
                                </article>

                                <article className="experience_details">

                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Java</h4>
                                </article>


                            </div>                          
                        </div>

                    </Carousel.Item >

                    <Carousel.Item interval={800}>

                        <div className="experience_container" >
                                <div className='experience_title'>
                                    <h3>Tools Development</h3>
                                </div>  

                            <div className="experience_content">

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Git</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>GitHub</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>Docker</h4>
                                </article>

                            </div>
                          
                        </div>

                    </Carousel.Item >

                    <Carousel.Item interval={800}>

                        <div className="experience_container" >
                                <div className='experience_title'>
                                    <h3>SGBD Development</h3>
                                </div>

                            <div className="experience_content">

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>MongoDB</h4>
                                </article>

                                <article className="experience_details">
                                    <BsPatchCheckFill className="experience_details-icon" />
                                    <h4>mySQL</h4>
                                </article>
                            </div>
                            </div>

                    </Carousel.Item >
                </Carousel>
            </div>
        </section>


    );
}

export default IndividualIntervalsExample;