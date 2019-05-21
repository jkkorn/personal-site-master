import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jonathan Korn</h2>
        <p><a href="mailto:j.kkorn@gmail.com">Jkkorn@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jonathan. I like designing and building solutions.
            I am a Brazilian product guy, <a href="https://usfca.edu/">University of San Francisco </a> almuni, currently working on product at VTEX focused on developer experience.  I have a strong entrepreneurial bend which means I'm always working on something on the side.
            I built one of Brazil's biggest public utility apps  <a href="https://www.twitter.com/leisecarj"> @LeiSecaRJ </a> and won a few hackathons.  I've also tried launching my own business a few times :).  
            
            Previously I used to be responsible for Product at  <a href="http://playkids.com"> PlayKids(Movile)</a>, <a href="http://mjv.com.br">MJV</a>, and <a href="http://orama.com.br">Órama</a>. 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Jonathan Korn </p>
    </section>
  </section>
);

export default Nav;
