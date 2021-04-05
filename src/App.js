import React, { Component } from "react";
import ViewTable from "./components/table";
import MyNav from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { city:'', data:[], skip:0 }
  }

  
  // recall api
  recallApi() {
    let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/' 
                + this.state.city
                + '?$top=30&$skip='
                + this.state.skip
                +'&$format=JSON'
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((jsonData) =>{
            // console.log(jsonData)
            this.setState((state) => ({ data: state.data.concat(jsonData) , skip: state.skip + 30 }))
        })
  }

  // refresh city and state, initialize data
  transData=(city)=>{
    console.log('loading')
    this.setState({ city: city, data: [], skip: 0})
    let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/' 
                + city
                + '?$top=30&$skip=0&$format=JSON'
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((jsonData) =>{
            // console.log(jsonData)
            this.setState({ data: jsonData, skip:30 })
        })
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <MyNav getCity = {this.transData.bind(this)}/>
  //       <ViewTable targetData = {this.state.data} targetCity = {this.state.city}/>
  //     </div>
  //   );
  // }
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
