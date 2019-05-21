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
        check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      
    </article>
  </Main>
);

export default Index;
