import React from 'react'
import Textfield from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const getColor = (passwordStrength) => {
    switch (passwordStrength) {
        case 'risky' : return '#FF2E1D'
        case 'weak' : return '#FF720F' 
        case 'medium' : return '#E8A72C'
        case 'strong' : return '#5BA324'
        case 'very strong' : return '#144A0A'
        default : return 'gray'
    }
}

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