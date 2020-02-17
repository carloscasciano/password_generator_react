import React from 'react'
import Button from '@material-ui/core/Button'

const buttonStyle = {
    width:'15em',
    height: '5em',
    marginRight: '1em'
}

const GeneratePasswordButton = (props) => {
    return (
        <>
            <Button 
                variant="contained" 
                color="primary"
                onClick={props.props.handleGeneratePassword}
                style={buttonStyle}
                size="large"
            >
                GENERATE
            </Button>
        </>
    )
}

export default GeneratePasswordButton