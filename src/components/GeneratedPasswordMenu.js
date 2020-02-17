import React from 'react'
import Textfield from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { getColor } from '../code_logic/getColor'

const GeneratedPasswordMenu = (props) => {

    const currentColor = getColor(props.passwordStrength)
    const useStyles = makeStyles({
        root: {
          color: currentColor
        }
      })
    const classes = useStyles()

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Textfield 
                    variant = "outlined"
                    value = {props.generatedPassword} 
                    helperText = {props.passwordStrength}
                    InputProps={{className: classes.root}}
                    readOnly
                />
            </Grid>
        </>           
    )
}

export default GeneratedPasswordMenu