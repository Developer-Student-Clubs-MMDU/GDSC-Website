import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Pages/Router';
import { Provider } from 'react-redux';
import { store } from './app/store';
import EventDetails from './Pages/Events/eventDetails';
import ScreenLoader from './Pages/Loader/ScreenLoader';

function App() {
  return (
      <>
      {/* <ScreenLoader/> */}
      <BrowserRouter>
      
        <div className="App">
          <Header />
          <Router />
          <Footer />
          {/* <EventDetails/> */}
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;
