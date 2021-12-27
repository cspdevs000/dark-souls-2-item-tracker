import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
