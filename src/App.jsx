import { useState } from 'react';
import NavBar from './components/NavBar';
import Apresentation from './components/Apresentation';
import Techs from './components/Techs';
import Works from './components/Works';
import Project from './components/Projects';

function App() {

  return (
    <>
      <NavBar />
      <Apresentation />
      <Techs />
      <Works>
        <Project />
      </Works>
    </>
  );
};

export default App;
