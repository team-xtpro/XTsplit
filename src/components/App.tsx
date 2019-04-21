import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import BillList from './BillList';

class App extends Component {
    public render() {
        return (
            <div className="App">
                <h3>Bills</h3>
                <BillList/>
            </div>
        );
    }
}

export default connect(null, {})(App);
