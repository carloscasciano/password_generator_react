import React from 'react';
import './App.css';


import Title from './components/Title'
import GeneratedPasswordMenu from './components/GeneratedPassword'
import ButtonsMenu from './components/ButtonsMenu'
import CommandsMenu from './components/CommandsMenu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Title />
      <GeneratedPasswordMenu />
      <ButtonsMenu />
      <CommandsMenu />
      <Footer />
    </div>
  );
}

export default App;
