import { useState } from 'react';
import NavBar from './components/NavBar';
import Apresentation from './components/Apresentation';
import Techs from './components/Techs';
import Works from './components/Works';

function App() {

  return (
    <>
      <NavBar />
      <Apresentation />
      <Techs />
      <Works />
    </>
  );
};

export default App;
