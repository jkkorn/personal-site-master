import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Jonathan Korn: Product Design, Management and Strategy</Link></h2>
          <p>A small slice of the internet where you can read up about me, what I've been up to and etc.</p>
        </div>
      </header>
      <p> Welcome :) Feel free to read more <Link to="/about">about me</Link>,
      <p> You can get a more up to date feed of what I'm up to, by following me on 
        <a href="https://www.instagram.com/eu_sou_o_jonathan"> Instagram </a>
        <a href="https://www.medium.com/jkkorn"> Medium </a> and 
        <a href="https://www.linkedin.com/in/jkkorn"> LinkedIn </a>
      </p>
      
       
      </p>
      
    </article>
  </Main>
);

export default Index;
