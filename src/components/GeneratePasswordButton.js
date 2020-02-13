import React from 'react'
import Button from '@material-ui/core/Button'

const GeneratePasswordButton = (props) => {
    return (
        <>
            <Button 
                variant="contained" 
                color="primary"
                onClick={props.props.handleGeneratePassword}
            >
                GENERATE
            </Button>
        </>
    )
}

export default GeneratePasswordButton