
import './header.css';
import React from 'react';
import CTA from './CTA';



const Header = () => {
    return (

        <header id='home'>
            <div className="container header_container">
                <h5>Olá, Eu sou</h5>
                <h1>Diego Pereira</h1>
                <div className="text-light">Dev Front End</div>
                <CTA></CTA>

            </div>
        </header>

    );
}

export default Header;