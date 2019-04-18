import React, { Component } from 'react';
import NavHead from './components/NavHead';
import NavCarousel from './components/NavCarousel';
import ItemCarousel from './components/ItemCarousel';
import Footer from './components/Footer/Footer.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Details from './views/Details/Details'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
      <div className="App">

      <Route exact path="/" render = { props => (
        <div>
           <NavHead/>
           <NavCarousel/>
       <div className="container">
       <ItemCarousel />
       </div>
       <Footer />
        </div>
      )}/>
      <Route path="/details" component={Details} />   
      </div>
        </BrowserRouter>
    );
  }
}

export default App;