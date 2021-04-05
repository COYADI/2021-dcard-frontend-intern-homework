import React, { Component } from 'react';
import { 
    NavDropdown,
    Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { cities } from "../constant";

class MyNav extends Component {

    getDropdown() {
        return cities.map((city) => {
            return(
                <NavDropdown.Item key={city} eventKey={city} href={`/scenicSpot/` + city}>{city}</NavDropdown.Item>
            )
        })
    }

    render(){
        return (
            <Nav variant="pills" activeKey="1" onSelect={this.sendData}>
                <Nav.Item>
                    <h3>
                        Dcard 2021 Web Frontend Intern Homework
                    </h3>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="" href="/scenicSpot">
                        All
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Select City" id="nav-dropdown">
                    {this.getDropdown()}
                </NavDropdown>
            </Nav>
        );
    }
    
}

export default MyNav