import React from "react";
import './contact.css';
import { MdOutlineMail } from 'react-icons/md'

import { BsWhatsapp } from 'react-icons/bs'

//emailjs
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_z3ejrtd', 'template_ux2f2ak', form.current, 'QlXHH8yOkCSoRgL2u')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      
      <h2> Contatos </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="fade-up"
             className="contact_option">
            <a href="mailto:digodark100@gmail.com" rel="noreferrer" target="_blank">
              <MdOutlineMail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>Email pessoal</h5>
            </a>
          </article>

          <article data-aos="fade-down"
            className="contact_option">
            <a href="http://api.whatsapp.com/send?phone=71996907047" rel="noreferrer" target="_blank">
              <BsWhatsapp className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h5>(71)996907047</h5>
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Seu nome completo" required />
          <input type="email" name='email' placeholder="Seu e-mail" required />
          <textarea name="message" id="" rows="7" placeholder="Digite aqui sua mensagem" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 