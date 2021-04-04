import React from 'react';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class ViewTable extends React.Component {
    
    // build table body
    makeTable() {
        console.log(this.props.targetData)
        return this.props.targetData.map((data) => {
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
                        <th colSpan = '2'>{this.props.targetCity}</th>
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