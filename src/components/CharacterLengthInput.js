import React from 'react'
import TextField from '@material-ui/core/TextField'

const lengthInputStyle = {
    width:"6em",
    margin: "15px"
}

const CharacterLengthInput = (props) => {
    props = props.props
    return (
        <>
            <TextField
                value = {props.userCharacterLengthInput}
                onChange = {props.handleCharacterLengthInput}
                label="length"
                size="medium"
                type="number"
                style={lengthInputStyle}
            />
        </>
    )
}

export default CharacterLengthInput