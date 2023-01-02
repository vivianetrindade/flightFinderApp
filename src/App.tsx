import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global';
import Header from './components/Header';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header/>
      </div>
    </ThemeProvider>
  );
}

export default App;
