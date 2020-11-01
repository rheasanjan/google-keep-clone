import { ThemeProvider } from '@material-ui/core';
import React from 'react';

import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <div>
      <Header />
  
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
