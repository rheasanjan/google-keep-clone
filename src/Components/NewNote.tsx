import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import React from "react";
import styled from "styled-components";
import { LightTheme } from "../Theme";

const StyledNote = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  border: 1px solid ${LightTheme.NoteBorder};
  border-radius: 5px;
  .title-input {
    width: 100%;
  }
`;

type NewNoteProps = {
  isChecklist: Boolean;
  handleCheckbox: (value: boolean) => void;
};
const NewNote = (props: NewNoteProps) => {
  const { handleCheckbox, isChecklist } = props;
  return (
    <StyledNote className="">
      <InputBase
        placeholder={isChecklist ? "Title" : "Take a note..."}
        className="title-input"
      />
      {isChecklist ? (
        <Checkbox
          icon={<EmojiObjectsOutlinedIcon />}
          checkedIcon={<EmojiObjectsIcon />}
        />
      ) : (
        <Checkbox
          onChange={(e) => handleCheckbox(e.target.checked)}
          checked={isChecklist}
        />
      )}
    </StyledNote>
  );
};

export default NewNote;
