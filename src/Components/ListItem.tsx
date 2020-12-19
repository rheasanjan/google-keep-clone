import { Checkbox } from "@material-ui/core"
import InputBase from "@material-ui/core/InputBase"
import AddIcon from "@material-ui/icons/Add"
import React from "react"
import styled from "styled-components"
import { FontSize, LightTheme } from "../Theme"
import { ListItemType } from "../types"

const StyledList = styled.div`
    border-top: 1px solid ${LightTheme.NoteBorder};
    .title-input {
        width: 100%;
    }
    .add-icon {
        color: ${LightTheme.PrimaryText};
        font-size: ${FontSize.Label};
        margin-bottom: 0.125rem;
    }
`
type ListItemPropType = {
    item: ListItemType
    handleChange: (index: number, key: keyof ListItemType, value: string | boolean) => void
    index: number
}

const ListItem = (props: ListItemPropType) => {
    const { item, index, handleChange } = props
    const { value, checked } = item

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(index, "value", e.target.value)
    }

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(index, "checked", e.target.checked)
    }
    
    return (
        <StyledList className="d-flex align-items-center my-2">
            {value ? <Checkbox onChange={onCheck} value={checked}/> : <AddIcon className="add-icon mx-1" />}
            <InputBase
                placeholder="List item"
                className="w-100"
                value={value}
                onChange={onTextChange}
            />
        </StyledList>
    )
}

export default ListItem
