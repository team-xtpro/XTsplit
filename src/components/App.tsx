import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import AddBillForm from './AddBillForm/AddBillForm';
import BillList from './BillList/BillList';

class App extends Component {
    public render() {
        return (
            <div className="App">
                <h3>Add a new bill</h3>
                <AddBillForm/>
                <h3>Bills</h3>
                <BillList/>
            </div>
        );
    }
}

export default connect(null, {})(App);
