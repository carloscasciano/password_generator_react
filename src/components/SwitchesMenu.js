import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesMenu = (props) => {
    props = props.props
    
    return (
        <>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch checked={props.rulesSwitches.upperCase} onChange={props.handleSwitchesState('upperCase')} />}
                    label = "UPPERCASE"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch checked={props.rulesSwitches.lowerCase} onChange={props.handleSwitchesState('lowerCase')}/>}
                    label = "lowercase"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch checked={props.rulesSwitches.numbers} onChange={props.handleSwitchesState('numbers')}/>}
                    label = "0123456789"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch checked={props.rulesSwitches.symbols} onChange={props.handleSwitchesState('symbols')}/>}
                    label = "!@#$%^&*()"
                />
            </FormGroup>
        </>
    )
}

export default SwitchesMenu