import React, { Component } from "react";
import ViewTable from "./components/table";
import MyNav from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


class App extends Component {
  
  render() {
    return(
      <Router>
        <div>
          <MyNav/>
          <Switch>
            <Route exact path='/scenicSpot'>
              <ViewTable/>
            </Route>
            <Route exact path='/scenicSpot/:city'>
              <ViewTable/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
 
}

export default App;
