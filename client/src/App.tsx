import React from 'react';
import { createBrowserRouter as createRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global';
import Header from './components/Header';
import Form from './components/Form';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import { getFlightBooking, getPassengersByBookingId } from './utils/data-utils';

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
  const router = createRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Form flightDetails={flightDetails} setFlightDetails={setFlightDetails}/>}/>
        <Route path='bookingInfo' element={<Booking/>}/>
        <Route 
          path='confirmation/:confirmationId' 
          element={<Confirmation/>} 
          loader={({params})=>{
            return getPassengersByBookingId(params.confirmationId!);
          }}
        />
       
      </Route>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </ThemeProvider>
  );
}
const Root = () => {
  return (
    <>
    <Header/>
    <>
      <Outlet/>
    </>
    </>
  )
}

export default App;
