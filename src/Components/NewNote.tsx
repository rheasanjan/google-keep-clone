import { Typography } from '@material-ui/core'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import React from 'react'
import styled from 'styled-components'
import { LightTheme } from '../Theme';


const StyledNote = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border: 1px solid ${LightTheme.noteBorder};
border-radius: 5px;
`
const NewNote = () => {
    return (
        <StyledNote className=""> 
            <Typography variant="body1"> Take a note...</Typography>
             <CheckBoxOutlinedIcon />
        </StyledNote>
    )
}

export default NewNote