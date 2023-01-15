import React from "react";
import './portfolio.css';

//import imagens
import IMG1 from '../../assets/img/jogodavelha.jpeg'
import IMG2 from '../../assets/img/JogomataMosquito.jpeg'
import IMG3 from '../../assets/img/telaperguntas.jpeg'
import IMG4 from '../../assets/img/portaselecionada.jpeg'
import IMG5 from '../../assets/img/calculadora.jpeg'
import IMG6 from '../../assets/img/spotify.jpeg'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Jogo da Velha',
        github: 'https://github.com/Sancttus/Jogo_da_velha',
        demo: 'https://jogo-da-velha-lgvvdalu4-sancttus.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Jogo Mata Mosquito',
        github: 'https://github.com/Sancttus/Sancttus-Jogo-Mata-Mosquito',
        demo: 'https://jogo-mata-mosquito-bice.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Jogo Quiz',
        github: 'https://github.com/Sancttus/Portas',
        demo: 'https://vercel.com/dashboard'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Jogo Monty Hall',
        github: 'https://github.com/Sancttus/jogo-quiz',
        demo: 'https://vercel.com/dashboard'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Calculadora',
        github: 'https://github.com/Sancttus/Calculadora',
        demo: 'https://vercel.com/dashboard'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Clone Spotify',
        github: 'https://github.com/Sancttus/Spotfy',
        demo: 'https://vercel.com/dashboard'
    },

]

const Portfolio = () => {

    return (
        <section id="portfolio">
            
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                    {data.map(({id, image, title, github, demo} ) =>  (
                             <article data-aos="zoom-out-down"  key={id} className="portfolio_item">
                             <div className="portfolio_item-image">
                                 <img src={image} alt={title} />
                             </div>
                             <h3>{title}</h3>
                             <div className="portfolio_item-cta">
                                 <a href={github} className="btn btn-primary" rel="noreferrer" target="_blank">Github</a>
                                 <a href={demo} rel="noreferrer" target="_blank" className="btn btn-primary">Vercel</a>
                             </div>
                         </article>
                    ))}
            </div>          
        </section>
    );
}

export default Portfolio;