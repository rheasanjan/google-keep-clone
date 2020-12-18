import React from "react"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import MuiSwitch, { SwitchProps } from "@material-ui/core/Switch"

interface SwitchComponentProps extends SwitchProps {
    label?: string
}
const Switch = (props: SwitchComponentProps) => {
    const { label, ...restProps } = props
    return (
        <FormControlLabel control={<MuiSwitch color="secondary" {...restProps} />} label={label} />
    )
}

export default Switch
