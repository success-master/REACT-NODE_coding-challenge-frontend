import React, { Component } from 'react'
import {
    Container,
    Table 
} from 'reactstrap';
import { getNumbers } from '../service/api';
import {Link} from 'react-router-dom';
import {getDate} from '../component/Getdate';

export default class Agents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: []
        }
    }
    componentDidMount() {
       getNumbers(this.props.match.params.number).then(response=>{
           let {data} = response;
           this.setState({numbers:data});
       })
    }

    render() {
        return (
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Agent Name</th>
                            <th>Call date and time</th>
                            <th>Resolution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.numbers.map((l,index) => {
                                return(
                                    <tr key={index}>
                                        <td><Link to={{pathname:`/agent/${l.agentIdentifier}`}}>{l.agentName}</Link></td>
                                        <td>{getDate(l.dateTime)}</td>
                                        <td>{l.resolution}</td>
                                    </tr>
                                )
                            })
                        }   
                    </tbody>
                </Table>
            </Container>
        )
    }
}