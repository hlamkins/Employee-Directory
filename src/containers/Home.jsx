import React, { Component } from 'react';
import axios from "axios";
import Table from "../components/table/Table";
import SortButtons from '../components/sortButtons/sortButtons';
import Search from '../components/search/Search';

class Home extends Component {
    state = {
        employees: [],
        firstEmployees: [],
    }

    componentDidMount() {
        axios
            .get(
                "https://randomuser.me/api/?results=40&nat=US"
            )
            .then((response) => {
                this.setState({ employees: response.data.results, firstEmployees: response.data.results });

            })
            .catch((err) => {
                console.log(err);
            });
    };

    handleInputChange = (e) => {
        let emps = this.state.firstEmployees;
        let search = RegExp(`^${e}`, "gi");
        let filteredEmployees = emps.filter(emp => emp.locaiton.state.match(search));
        if (!search) {
            this.setState({ employees: this.state.firstEmployees });
        }
        else {
            this.setState({ employees: filteredEmployees });
        }
    }

    sortByName = (e) => {
        let result = this.state.employees.sort((a,b) => {
            let aa = a.name   
            let bb = b.name          
            
            if (aa[e] < bb[e]) return -1;
            if (aa[e] > bb[e]) return +1;
            return 0;
        });
        this.setState({ employees: result })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <SortButtons
                        sortByName={this.sortByName}
                    />
                </div>
                <div className="row">
                    <Search
                        {...this.state}
                        handleInputChange={this.handleInputChange}
                        />
                </div>
                <div className="row">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Last</th>
                                <th scope="col">First</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee) => (
                                <Table key={employee.id.value} employee={employee} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};

export default Home;