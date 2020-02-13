import React from 'react'

import TextField from '@material-ui/core/TextField'

const CharacterLengthInput = (props) => {
    props = props.props
    return (
        <>
            <TextField
                value = {props.userCharacterLengthInput}
                onChange = {props.handleCharacterLengthInput}
                label="length"
                id="filled-size-small"
                variant="filled"
                size="small"
            />
        </>
    )
}

export default CharacterLengthInput