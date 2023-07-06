import React from "react";
import './portfolio.css';

//import imagens
import IMG1 from '../../assets/img/app_clima.jpg'
import IMG2 from '../../assets/img/blog_film.jpg'
import IMG3 from '../../assets/img/blog-perguntas_e_respostas.jpg'
import IMG4 from '../../assets/img/chancedobahia.jpg'
import IMG5 from '../../assets/img/lista ToDo.jpg'
import IMG6 from '../../assets/img/mini_blog.jpg'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'App Clima',
        github: 'https://github.com/Sancttus/Api_clima',
        demo: 'https://api-clima-gamma.vercel.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Blog Filmes',
        github: 'https://github.com/Sancttus/Movies',
        demo: 'https://movies-gamma-teal.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Blog Perguntas/Respostas',
        github: 'https://github.com/Sancttus/Mini-blog_node',
        demo: 'https://vercel.com/dashboard'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Chances do Bahia',
        github: 'https://github.com/Sancttus/ChanceDoBahia',
        demo: 'https://chance-do-bahia.vercel.app/'
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
        title: 'Mini Blog',
        github: 'https://github.com/Sancttus/MiniBlog',
        demo: 'https://mini-blog-smoky-iota.vercel.app/'
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