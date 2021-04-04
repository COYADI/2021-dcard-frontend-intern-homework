import React, { Component } from 'react';
import { 
    NavDropdown,
    Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class MyNav extends Component {

    // return selected city
    sendData = (city) => {
        this.props.getCity(city)
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
                    <Nav.Link eventKey="">
                        All
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Select City" id="nav-dropdown">
                    <NavDropdown.Item eventKey="Taipei">Taipei</NavDropdown.Item>
                    <NavDropdown.Item eventKey="NewTaipei">NewTaipei</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Taoyuan">Taoyuan</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Taichung">Taichung</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Tainan">Tainan</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Kaohsiung">Kaohsiung</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Keelung">Keelung</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Hsinchu">Hsinchu</NavDropdown.Item>
                    <NavDropdown.Item eventKey="HsinchuCounty">Hsinchu County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="MiaoliCounty">Miaoli County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="ChanghuaCounty">Changhua County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="NantouCounty">Nantou County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="YunlinCounty">Yunlin County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="ChiayiCounty">Chiayi County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Chiayi">Chiayi</NavDropdown.Item>
                    <NavDropdown.Item eventKey="PingtungCounty">Pingtung County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="YilanCounty">Yilan County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="HualienCounty">Hualien County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="TaitungCounty">Taitung County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="KinmenCounty">Kinmen County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="PenghuCounty">Penghu County</NavDropdown.Item>
                    <NavDropdown.Item eventKey="LienchiangCounty">Lienchiang County</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    }
    
}

export default MyNav