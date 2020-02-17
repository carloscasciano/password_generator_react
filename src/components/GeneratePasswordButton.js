import React from 'react'
import Button from '@material-ui/core/Button'

const buttonStyle = {
    margin:"15px",
    padding:"25px"
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