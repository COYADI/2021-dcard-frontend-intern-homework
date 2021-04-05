import React from 'react';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class ViewTable extends React.Component {
    
    // build table body
    // makeTable() {
    //     console.log(window.location.pathname)
    //     console.log(this.props.targetData)
    //     return this.props.targetData.map((data) => {
    //         const { ID, Name, DescriptionDetail } = data
    //         return (
    //            <tr key={ID}>
    //               <td>{Name}</td>
    //               <td>{DescriptionDetail}</td>
    //            </tr>
    //         )
    //     })
    // }
    constructor(props) {
        super(props)
        this.state = { data:[], skip:0, gen: true }
    }

    // detect if scrolled to bottom
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight
    }
    
    componentDidMount() {
        this.getData()
        setInterval(() => {document.addEventListener('scroll', this.trackScrolling)}, 1000)
    }
    
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }
    
    trackScrolling = () => {
        const wrappedElement = document.getElementById('root')
        if (this.isBottom(wrappedElement)) {
        this.getData()
        document.removeEventListener('scroll', this.trackScrolling)
        }
    }

    getData() { 
        let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'
        +  window.location.pathname
        +  '?$top=30&$skip='
        +  this.state.skip
        +  '&$format=JSON'
        fetch(url)
            .then((response) => {
                return response.json()
            }).then((jsonData) =>{
                // console.log(jsonData)
                this.setState((state) => ({ data: state.data.concat(jsonData) , skip: state.skip + 30}))
            })
    }
    
    makeTable() {
        console.log(this.state.data)
        return this.state.data.map((data) => {
            const { ID, Name, DescriptionDetail } = data
            return (
               <tr key={ID}>
                  <td>{Name}</td>
                  <td>{DescriptionDetail}</td>
               </tr>
            )
        })
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan = '2'>{window.location.pathname.split('/')[2]}</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.makeTable()}
                </tbody>
            </Table>
        )
    }
}

export default ViewTable