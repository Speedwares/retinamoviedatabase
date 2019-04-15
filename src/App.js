import React, { Component } from 'react';
import NavHead from './components/NavHead';
import NavCarousel from './components/NavCarousel';
import ItemCarousel from './components/ItemCarousel';
import Footer from './components/Footer/Footer.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
      <div className="App">
      <Route />
              <NavHead/>
           <NavCarousel/>
       <div className="container">
       <ItemCarousel />
       </div>
       <Footer />
      </div>
        </BrowserRouter>
    );
  }
}

export default App;