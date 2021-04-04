import React, { Component } from "react";
import ViewTable from "./components/table";
import MyNav from "./components/Navbar";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { city:'', data:[], skip:0 }
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }
  
  componentDidMount() {
    setInterval(() => {document.addEventListener('scroll', this.trackScrolling)}, 1000)
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling)
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('root')
    if (this.isBottom(wrappedElement)) {
      this.callApi()
      document.removeEventListener('scroll', this.trackScrolling)
    }
  }

  

  callApi() {
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

  transData=(city)=>{
    this.setState({ city:city, data: [] })
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

  render() {
    return (
      <div className="App">
        <MyNav getCity = {this.transData.bind(this)}/>
        <ViewTable targetData = {this.state.data} targetCity = {this.state.city}/>
      </div>
    );
  }
 
}

export default App;
