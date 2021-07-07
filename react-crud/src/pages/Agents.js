import React, { Component } from 'react'
import {
    Container,
    Table 
} from 'reactstrap';
import { getAgents } from '../service/api';
import {Link} from 'react-router-dom';
import {getDate} from '../component/Getdate';

export default class Agents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agents: []
        }
    }

    componentDidMount() {
       getAgents(this.props.match.params.id).then(response=>{
           let {data} = response;
           this.setState({agents:data});
       })
    }

    render() {
        return (
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Phone number</th>
                            <th>Call date and time</th>
                            <th>Resolution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.agents.map((l,index) => {
                                return(
                                    <tr key={index}>
                                        <td><Link to={{pathname:`/calls/${l.number}`}} >{l.number}</Link></td>
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