import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Home from "./components/Home";
import Weapons from "./components/Weapons";
import Armors from "./components/Armors";
import Keys from "./components/Keys";
import Consumables from "./components/Consumables";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/weapons' element={<Weapons/>}/>
          <Route path='/armor' element={<Armors/>}/>
          <Route path='/keys' element={<Keys/>}/>
          <Route path='/consumables' element={<Consumables/>}/>
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


//////TODO////////
// build API
// seed data
// make a singular child component with the card JSX for each parent, and link them together
// make props for the children of each plural component
// make search functional
// make areas component that list the items you can get w links to the item
// make a saved items component for the user (if auth ever happens)
