import React from 'react'

const GeneratePasswordButton = (props) => {
    return (
        <>
            <button onClick={props.props.handleGeneratePassword}>generate</button>
        </>
    )
}

export default GeneratePasswordButton