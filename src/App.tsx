import React, { useState } from "react";

import { ThemeProvider, Box } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { setTheme } from "./Theme";
import { ThemeTypes } from "./types";

type AppProps = {
  background: string;
};

const StyledApp = styled.div`
  ${(props: AppProps) => `{
  background: ${props.background};
  height: 100vh;
}`}
`;

function App() {
  const [themeType, setThemeType] = useState(ThemeTypes.light);

  const theme = setTheme(themeType);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StyledApp background={theme.palette.background.default}>
          <Header setTheme={setThemeType} theme={themeType} />
          <Box pt="5rem">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Box>
        </StyledApp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;