import InputBase from "@material-ui/core/InputBase"
import Checkbox from "@material-ui/core/Checkbox"
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined"
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects"
import React from "react"
import styled from "styled-components"

import ListItem from "./ListItem"
import { LightTheme } from "../Theme"
import { ListItemType } from "../types"

const StyledNote = styled.div`
    width: 50%;
    border: 1px solid ${LightTheme.NoteBorder};
    border-radius: 5px;
`

type NewNoteProps = {
    isChecklist: Boolean
    handleCheckbox: (value: boolean) => void
    title: string
    setTitle: (value: string) => void
    listItems: ListItemType[] 
    setListItems: (value: ListItemType[]) => void
}
const NewNote = (props: NewNoteProps) => {
    const { handleCheckbox, isChecklist, title, setTitle, listItems, setListItems } = props

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
      setTitle(e.target.value)
    }

    const handleListItemChange = (index: number, key: keyof ListItemType, value: string | boolean) => {
      const listItemsCopy = [...listItems]
      const itemVal = {...listItemsCopy[index]}
      listItemsCopy[index] = {...itemVal, [key]: value }
      setListItems([...listItemsCopy])
    }

    return (
        <StyledNote>
          <section  className="d-flex justify-content-between align-items-center px-3">
            <InputBase
                placeholder={isChecklist ? "Title" : "Take a note..."}
                className="w-100"
                value={title}
                onChange={handleTitleChange}
            />
            {isChecklist ? (
                <Checkbox icon={<EmojiObjectsOutlinedIcon />} checkedIcon={<EmojiObjectsIcon />} />
            ) : (
                <Checkbox
                    onChange={(e) => handleCheckbox(e.target.checked)}
                    checked={isChecklist}
                />
            )}
            </section>
            {isChecklist && 
            (listItems.map((listItem,i) => <ListItem index={i} item={listItem} handleChange={handleListItemChange}/>))}
        </StyledNote>
    )
}

export default NewNote
