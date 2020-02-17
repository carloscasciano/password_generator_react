import React, {useState} from 'react';
import './App.css';
import Title from './components/Title'
import GeneratedPasswordMenu from './components/GeneratedPasswordMenu'
import ButtonsMenu from './components/ButtonsMenu'
import CommandsMenu from './components/CommandsMenu'
import FooterInfo from './components/FooterInfo'
import {generatePassword} from './code_logic/generatePassword'
import {createMasterString} from './code_logic/generatePassword'
import {checkPasswordStrength} from './code_logic/checkPassWordStrenght'


function App() {
  
  /* 
  * States
  */

  const [generatedPassword, setGeneratedPassword] = useState("****************")
  const [userCharacterLengthInput, setUserCharacterLengthInput] = useState(16)
  const [rulesSwitches, setRulesSwitches] = useState({
    lowerCase: false,
    upperCase: true,
    symbols: false,
    numbers: true
    })
  const [passwordStrength, setPasswordStrength] = useState("strength")

  /* 
  * Handlers
  */

  const handleCharacterLengthInput = (event) => {
    setUserCharacterLengthInput(event.target.value)
  }

  const handleSwitchesState = name => event => {
    setRulesSwitches({ ...rulesSwitches, [name]: event.target.checked })
  }

  const handleGeneratePassword = () => {
    const rulesString = createArrayOfRulesFromSwitches(rulesSwitches)
    const charactersString = createMasterString(rulesString)
    if (charactersString === "") {
      setGeneratedPassword("turn switches on")
    }
    else if (userCharacterLengthInput > 256) {
      setGeneratedPassword("must be < 256 characters")
    }
    else if (userCharacterLengthInput < 2) {
      setGeneratedPassword("minimum 2 characters")
    }
    else {
      const newPassword = generatePassword(userCharacterLengthInput,charactersString)
      const newPasswordStrength = checkPasswordStrength(newPassword)
      setGeneratedPassword(newPassword)
      setPasswordStrength(newPasswordStrength)
    }
  }

  /* 
  * Side Functions
  */

  const createArrayOfRulesFromSwitches = (rulesObject) => {
    let newArr = []
    // eslint-disable-next-line array-callback-return
    Object.entries(rulesObject).map(element => {
        if (element[1] === true) newArr.push(element[0])
    })
    return newArr
  }

  /* 
  * App itself
  */

  return (
    <div className=" App">
      <Title />
      <GeneratedPasswordMenu 
        generatedPassword = {generatedPassword}
        passwordStrength = {passwordStrength}
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
      <FooterInfo />
    </div>
  )
}


export default App;