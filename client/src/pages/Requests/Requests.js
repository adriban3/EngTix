import React, {Component} from 'react';
import './Requests.css';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Table from 'react-bootstrap/lib/Table';
import API from '../../utils/API';

class Requests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickets: [],
            case: this.props.case
            //potentially add state var arr that pulls in table header names so that these aren't hard coded
        }
    };

    componentDidMount() {
        //need to setup API and API call here to pull all users from db
        API.getAllRequests()
            .then(res => {
                this.setState({tickets: res.data});
            })
    };

    render() {
        return(
                <Jumbotron>
                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Requestor</th>
                                <th>SU</th>
                                <th>ICE Score</th>
                                <th>Type</th>
                                <th>Active</th>
                                <th>Status</th>
                                <th>Phase</th>
                                <th>Next Steps</th>
                                <th>Lead</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tickets.map((tickets, i) => (
                                <tr key={i}>
                                    <td>{tickets.title}</td>
                                    <td>{tickets.requestor}</td>
                                    <td>{tickets.su}</td>
                                    <td>{tickets.ice}</td>
                                    <td>{tickets.type}</td>
                                    <td>{tickets.active}</td>
                                    <td>{tickets.status}</td>
                                    <td>{tickets.phase}</td>
                                    <td>{tickets.next}</td>
                                    <td>{tickets.lead}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Jumbotron>
        )
    }
}

export default Requests;