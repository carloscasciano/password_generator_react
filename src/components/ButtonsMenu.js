import React from 'react'
import Grid from '@material-ui/core/Grid'
import GeneratePasswordButton from './GeneratePasswordButton'
import CopyToClipboardButton from './CopyToClipboardButton'

const ButtonsMenu = (props) => {
    return (
        <>
            <Grid >
                <GeneratePasswordButton props = {props} />
                <CopyToClipboardButton props = {props} />
            </Grid>    
        </>
    )
}

export default ButtonsMenu