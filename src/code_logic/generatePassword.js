const lowerCaseString = `abcdefghijklmnopqrstuvwxyz`
const upperCaseString = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
const symbolsString = `!"#$%&'()*+,-./:;<=>?@[]^_}{~`
const numbersString = `0123456789`


export const createMasterString = (arrayOfRules) => {
    let masterString = ''
    if (arrayOfRules.includes(`lowerCase`))
        masterString = masterString.concat(lowerCaseString)
    if (arrayOfRules.includes(`upperCase`))
        masterString = masterString.concat(upperCaseString)
    if (arrayOfRules.includes(`symbols`))
        masterString = masterString.concat(symbolsString)
    if (arrayOfRules.includes(`numbers`))
        masterString = masterString.concat(numbersString)

    return masterString
    
}

const chooseRandomCharacterFromString = (targetString) => {
    const randomCharacter = Math.floor(Math.random()*targetString.length)
    const resultCharacter = targetString.slice(randomCharacter, randomCharacter+1)

    return resultCharacter
}

export const generatePassword = (passwordLength, charactersToBeUsedString) => {
    let resultPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        resultPassword = resultPassword.concat(chooseRandomCharacterFromString(charactersToBeUsedString))
    }
    return resultPassword
}


