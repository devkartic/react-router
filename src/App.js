import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component{
  render() {
    return(
        <Router>
            <div className="container-fluid">
                <Navbar/>
                <Route exact path="/"><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/contact"><Contact/></Route>
            </div>
        </Router>
    );
  }
}

export default App;
