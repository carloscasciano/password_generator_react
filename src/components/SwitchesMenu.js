import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchesMenu = () => {
    return (
        <>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch />}
                    label = "UPPERCASE"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch />}
                    label = "lowercase"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch />}
                    label = "0123456789"
                />
            </FormGroup>
            <FormGroup >
                <FormControlLabel
                    control = {<Switch />}
                    label = "!@#$%^&*()"
                />
            </FormGroup>
        </>
    )
}

export default SwitchesMenu