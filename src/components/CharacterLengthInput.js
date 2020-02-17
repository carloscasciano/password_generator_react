import React from 'react'
import TextField from '@material-ui/core/TextField'

const lengthInputStyle = {
    width:"6em"
}

const CharacterLengthInput = (props) => {
    props = props.props
    return (
        <>
            <TextField
                value = {props.userCharacterLengthInput}
                onChange = {props.handleCharacterLengthInput}
                label="length"
                size="small"
                type="number"
                style={lengthInputStyle}
            />
        </>
    )
}

export default CharacterLengthInput