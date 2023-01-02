import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global';
import Header from './components/Header';
import Form from './components/Form';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
    form: '#ffefeb',
    inputBorder: '#ccc',
    inputBorderFocus: '#fff',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
