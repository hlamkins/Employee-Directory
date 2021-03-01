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

    
}