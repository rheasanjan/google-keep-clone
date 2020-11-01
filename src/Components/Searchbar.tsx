import { InputBase } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../Theme';


const StyledSearch = styled.div`
font-size: ${FontSize.body};
font-weight: bold;
padding-left: 10px;
width: 100%;
.search {
 width: 100%;
}
`
const Searchbar = () => {
    return (
        <StyledSearch>
            <InputBase placeholder="Search" className="search" />
        </StyledSearch>
    )
}

export default Searchbar