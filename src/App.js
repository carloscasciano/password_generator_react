import React, {useState} from 'react';
import './App.css';

import Title from './components/Title'
import GeneratedPasswordMenu from './components/GeneratedPasswordMenu'
import ButtonsMenu from './components/ButtonsMenu'
import CommandsMenu from './components/CommandsMenu'
import Footer from './components/Footer'

import {generatePassword} from './code_logic/generatePassword'
import {createMasterString} from './code_logic/generatePassword'


/*  */

function App() {
  //states

  const [generatedPassword, setGeneratedPassword] = useState("passwordGENERATOR")
  const [userCharacterLengthInput, setUserCharacterLengthInput] = useState(8)
  const [rulesSwitches, setRulesSwitches] = useState({
    lowerCase: true,
    upperCase: true,
    symbols: false,
    numbers: true
    })

  // handlers

  const handleCharacterLengthInput = (event) => {
    setUserCharacterLengthInput(event.target.value)
  }

  const handleSwitchesState = name => event => {
    setRulesSwitches({ ...rulesSwitches, [name]: event.target.checked })
  }

  const handleGeneratePassword = () => {
    const rulesString = createArrayOfRulesFromSwitches(rulesSwitches)
    const charactersString = createMasterString(rulesString)
    setGeneratedPassword(generatePassword(userCharacterLengthInput,charactersString))
  }


  // functions

  const createArrayOfRulesFromSwitches = (rulesObject) => {
    let newArr = []
    // eslint-disable-next-line array-callback-return
    Object.entries(rulesObject).map(element => {
        if (element[1] === true) newArr.push(element[0])
    })
    return newArr
  }



  // APP:
  return (
    <div className=" App">
      <Title />
      <GeneratedPasswordMenu 
        generatedPassword = {generatedPassword}
      />
      <ButtonsMenu 
        handleGeneratePassword = {handleGeneratePassword}
        generatedPassword = {generatedPassword}
      />
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
