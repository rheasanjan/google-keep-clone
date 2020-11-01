import React from "react";

import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";

import Logo from "../assets/logo.png";
import { DarkTheme, LightTheme } from "../Theme";
import { ThemeTypes } from "../types";
import Searchbar from "./Searchbar";
import Switch from "./Switch";

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => `
    width: 100%;
    padding: 5px 0;
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
        background: ${
          theme === ThemeTypes.light
            ? LightTheme.textboxBackground
            : DarkTheme.textboxBackground
        };
    }
    && {
        box-shadow: none;
        border-bottom: 1px solid ${LightTheme.border};
    }

`}
`;

type HeaderPropType = {
  setTheme: (theme: ThemeTypes) => void;
  theme: ThemeTypes;
};

const Header = (props: HeaderPropType) => {
  const { theme, setTheme } = props;

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? ThemeTypes.dark : ThemeTypes.light);
  };

  return (
    <StyledAppBar theme={theme} position="fixed" color="primary">
      <Toolbar className="d-flex-between">
        <section className="d-flex">
          <img src={Logo} alt="logo" className="header__logo" />
          <Typography
            variant="h2"
            color="textPrimary"
            className="align-self-center"
          >
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
};
export default Header;
