import React, { Component } from 'react';
import './App.css';
import NavHead from './components/NavHead';
import NavCarousel from './components/NavCarousel';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

          <BrowserRouter>
              <NavHead/>
          </BrowserRouter>
       <BrowserRouter>
           <NavCarousel/>
       </BrowserRouter>

      </div>
    );
  }
}

export default App;
