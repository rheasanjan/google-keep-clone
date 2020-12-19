import React from "react"

import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"
import styled from "styled-components"

import Logo from "../assets/logo.png"
import { DarkTheme, LightTheme } from "../Theme"
import { ThemeTypes } from "../types"
import Searchbar from "./Searchbar"
import Switch from "./Switch"

const StyledAppBar = styled(AppBar)`
    ${({ theme }) => `
    width: 100%;
    padding: 5px 0;
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
        background: ${
            theme === ThemeTypes.Light ? LightTheme.TextboxBackground : DarkTheme.TextboxBackground
        };
    }
    && {
        box-shadow: none;
        border-bottom: 1px solid ${LightTheme.Border};
    }

`}
`

type HeaderPropType = {
    setTheme: (theme: ThemeTypes) => void
    theme: ThemeTypes
}

const Header = (props: HeaderPropType) => {
    const { theme, setTheme } = props

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? ThemeTypes.Dark : ThemeTypes.Light)
    }

    return (
        <StyledAppBar theme={theme} position="fixed" color="primary">
            <Toolbar className="d-flex justify-content-between align-items-center">
                <section className="d-flex justify-content-around align-items-center">
                    <img src={Logo} alt="logo" className="header__logo" />
                    <Typography variant="h2" color="textPrimary" className="align-self-center">
                        Keep
                    </Typography>
                </section>
                <section className="header__search">
                    <SearchOutlined className="mr-2" />
                    <Searchbar />
                </section>
                <section className="d-flex">
                    <Switch label="Dark mode" onChange={handleThemeChange} />
                    <Avatar />
                </section>
            </Toolbar>
        </StyledAppBar>
    )
}
export default Header
