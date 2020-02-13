import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { FormControl } from '@material-ui/core'

const SwitchesMenu = (props) => {
    props = props.props
    
    return (
        <>
        <FormControl>
            <FormGroup >
                <FormControlLabel
                    control = {
                        <Switch 
                            checked={props.rulesSwitches.upperCase} 
                            onChange={props.handleSwitchesState('upperCase')}
                            color="primary"
                        />
                    }
                    label = "ABC..."
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {
                        <Switch 
                            checked={props.rulesSwitches.lowerCase} 
                            onChange={props.handleSwitchesState('lowerCase')}
                            color="primary"
                        />
                    }
                    label = "abc..."
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {
                        <Switch 
                            checked={props.rulesSwitches.numbers} 
                            onChange={props.handleSwitchesState('numbers')}
                            color="primary"
                        />
                    }
                    label = "123..."
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {
                        <Switch 
                            checked={props.rulesSwitches.symbols} 
                            onChange={props.handleSwitchesState('symbols')}
                            color="primary"
                        />
                    }
                    label = "!@#..."
                />
            </FormGroup>
        </FormControl>
            
        </>
    )
}

export default SwitchesMenu