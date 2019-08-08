import React, { Component } from 'react';
import './App.css';
import {Createfrom} from '../src/redux/container/container.js';
import {Offerlist} from '../src/redux/container/offerlist_container.js';
import { BrowserRouter, Route} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={Offerlist}></Route>
      <Route path='/applynow' component={Createfrom}></Route>
      </BrowserRouter>
    )
  }
}

export default App

