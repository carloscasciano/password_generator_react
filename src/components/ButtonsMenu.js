import React from 'react'
import Grid from '@material-ui/core/Grid'
import GeneratePasswordButton from './GeneratePasswordButton'
import CopyToClipboardButton from './CopyToClipboardButton'

const gridStyle = {
    marginTop:"6px"
}

const ButtonsMenu = (props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={gridStyle}            
            >
                <GeneratePasswordButton item props = {props} />
                <CopyToClipboardButton item props = {props} />
            </Grid>    
        </>
    )
}

export default ButtonsMenu