import React from 'react'

const GeneratedPasswordMenu = (props) => {
    return (
        <>
            <input value={props.generatedPassword} readOnly></input>
            <p>strength: {props.passwordStrength}</p>
        </>
    )
}

export default GeneratedPasswordMenu