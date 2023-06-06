import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Energy from './components/Energy';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News />} />
            <Route exact path="/fuel" element={<Energy />} />
            
            
          </Routes>
        </Router>

        
      </>
    )
  }
}
