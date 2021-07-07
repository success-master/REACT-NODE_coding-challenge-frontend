import React, { Component } from 'react'
import {
    Container,
    Table 
} from 'reactstrap';
import {getCalls} from '../service/api';
import {Link} from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: []
        }
    }
    componentDidMount() {
       getCalls().then(response=>{
           let {data} = response;
           
           this.setState({logs:data});
       })
    }

    getTime(date) {
        let data = new Date(date);
        let hour = data.getHours();
        let minute = data.getMinutes();
        return `${hour}:${minute}`;
    }
    
    render() {
        return (
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Phone number</th>
                            <th>Number of calls</th>
                            <th>Last call details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.logs.map((l,index) => {
                                return(
                                    <tr key={index}>
                                        <td><Link to={{pathname:`/calls/${l.number}`}} >{l.number}</Link></td>
                                        <td>{l.numberOfCalls} call{l.number === 1 ? '' : 's'}</td>
                                        <td><Link to={{pathname:`/agent/${l.agentIdentifier}`}}>{l.agentName}</Link> / {this.getTime(l.dateTime)}</td>
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