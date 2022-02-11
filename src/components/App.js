import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import {
  getSomething
} from '../api';
import AboutMe from './AboutMe';

import {
  Navigation,
  MyProjects
} from './index';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getSomething()
      .then(response => {
        setMessage(response.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  });

  return (
    <div className="App">
      <Navigation />
      
      <Route exact path="/">
        <AboutMe />
      </Route>

      <Route exact path="/myprojects">
        <MyProjects />
      </Route>

      <h2>{ message }</h2>
    </div>
  );
}

export default App;