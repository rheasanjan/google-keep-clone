import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import Logo from '../assets/logo.png'
import { Colors } from '../Theme'
import Searchbar from './Searchbar'
import Switch from './Switch'

const StyledHeader = styled.header`
width: 100%;
height: 50px;
.d-flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.d-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header__logo {
    height: 40px;
    width: 40px;
    margin-right: 3px;
}
.header__search {
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: ${Colors.lightGrey};
}
.header__search:focus {
    background: ${Colors.primary};
}
.MuiAppBar-root {
    box-shadow: none;
    border-bottom: 1px solid ${Colors.border}   ;
}

`

const Header:React.FC = () => {
    return (
        <StyledHeader>
            <AppBar position="fixed">
                <Toolbar className="d-flex-between">
                    <section className="d-flex">
                    <img src={Logo} alt="logo" className="header__logo" />
                    <Typography variant="h2" color="textPrimary" className="align-self-center">Keep</Typography>
                    </section>
                    <section className="header__search">
                        <SearchOutlined className="mr-2" />
                        <Searchbar />
                    </section>
                    <section className="d-flex"> 
                        <Switch label="Light mode" />
                         <Avatar />
                    </section>
                </Toolbar>
            </AppBar>
        </StyledHeader>
    )
}
export default Header