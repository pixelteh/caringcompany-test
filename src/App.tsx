import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Calendar from "./components/Main/Calendar";
import { theme } from './theme';

import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Sidebar />
        <Calendar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
