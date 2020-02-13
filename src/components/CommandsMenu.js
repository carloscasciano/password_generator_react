import React from 'react'

import CharacterLengthInput from './CharacterLengthInput'
import SwitchesMenu from './SwitchesMenu'

const CommandsMenu = (props) => {
    return (
        <>
            <CharacterLengthInput 
                props = {props}
            />
            <SwitchesMenu 
                props = {props}
            />
        </>
    )
}

export default CommandsMenu