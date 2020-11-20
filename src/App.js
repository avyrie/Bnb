import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './config/routes';
import './App.css';

class App extends Component {
  state = {
  };
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
      
      
    );
  }
}

export default App;

