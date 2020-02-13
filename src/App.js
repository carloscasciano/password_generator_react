import React, {useState} from 'react';
import './App.css';

import Title from './components/Title'
import GeneratedPasswordMenu from './components/GeneratedPassword'
import ButtonsMenu from './components/ButtonsMenu'
import CommandsMenu from './components/CommandsMenu'
import Footer from './components/Footer'


function App() {
  //states

  const [userCharacterLengthInput, setUserCharacterLengthInput] = useState(8)
  const [rulesSwitches, setRulesSwitches] = useState({
    lowerCase: true,
    upperCase: true,
    symbols: true,
    numbers: true
    })

  // handlers

  const handleCharacterLengthInput = (event) => {
    setUserCharacterLengthInput(event.target.value)
  }

  const handleSwitchesState = name => event => {
    setRulesSwitches({ ...rulesSwitches, [name]: event.target.checked });
  };

  // functions

  const createArrayOfRulesFromSwitches = (rulesObject) => {
    let newArr = []
    Object.entries(rulesObject).map(element => {
        if (element[1] === true) newArr.push(element[0])
    })
    return newArr
  }



  // APP:
  return (
    <div className=" App">
      <Title />
      <GeneratedPasswordMenu />
      <ButtonsMenu />
      <CommandsMenu 
        userCharacterLengthInput = {userCharacterLengthInput}
        handleCharacterLengthInput = {handleCharacterLengthInput}
        rulesSwitches = {rulesSwitches}
        handleSwitchesState = {handleSwitchesState}
      />
      <Footer />
    </div>
  );
}

export default App;
