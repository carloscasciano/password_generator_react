import React from 'react'
import Grid from '@material-ui/core/Grid'
import CharacterLengthInput from './CharacterLengthInput'
import SwitchesMenu from './SwitchesMenu'

const CommandsMenu = (props) => {
    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <CharacterLengthInput props = {props}/>
                <SwitchesMenu props = {props}/>
            </Grid>
        </>
    )
}

export default CommandsMenu