import React from 'react'
import MuiSwitch, {SwitchProps} from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface SwitchComponentProps extends SwitchProps {
    label?: string,
}
const Switch = (props:SwitchComponentProps) => {
    const {label, ...restProps} = props
    return (
        <FormControlLabel
        control=
        {<MuiSwitch color="secondary" {...restProps} />}
        label={label}
        />
    )
}

export default Switch