import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {

  return <>
    <Link to='/home'>Home</Link> | <Link to='/myprojects'>My Projects</Link>
  </>
}

export default Navigation;