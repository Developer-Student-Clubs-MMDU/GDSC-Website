import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Pages/Router';
import ScreenLoader from './Pages/Loader/ScreenLoader';

function App() {
  return (
      <>
      <ScreenLoader/>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;
