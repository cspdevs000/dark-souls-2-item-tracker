import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Home from "./components/Home";
import Weapons from "./components/Weapons";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/weapons' element={<Weapons/>}/>
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
