import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {

  return <>
    <nav>
      <Link to='/'>About Me</Link> | <Link to='/myprojects'>My Projects</Link>
    </nav>
  </>
}

export default Navigation;