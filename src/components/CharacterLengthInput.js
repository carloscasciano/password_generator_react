import React from 'react'

import TextField from '@material-ui/core/TextField'

const CharacterLengthInput = (props) => {
    props = props.props
    return (
        <>
            <TextField 
                value = {props.userCharacterLengthInput}
                onChange = {props.handleCharacterLengthInput}
            />
        </>
    )
}

export default CharacterLengthInput