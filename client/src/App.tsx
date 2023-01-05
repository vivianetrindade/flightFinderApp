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
    button: '#ebfbff',
  },
  mobile: '768px',
};

function App() {
  const [flightDetails, setFlightDetails] = React.useState<any>(
    {trip: 'one-way', 
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: new Date(),
    returnDate: new Date(),
    adults: '0',
    children: '0',
    travelClass: ''}
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <Form flightDetails={flightDetails} setFlightDetails={setFlightDetails}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
