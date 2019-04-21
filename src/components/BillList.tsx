import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
    return { bills: state.bills };
};

const BillList = ({ bills }) => (
    <ul>
        {bills.map((bill) => (
            <li className="list-group-item" key="bill.id">{bill.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(BillList);

export default List;

/*
import * as React from 'react';
import { connect } from 'react-redux';
import IBill from '../types/IBill';

const mapStateToProps = (state: any) => {
    return { bills: state.bills };
};

interface IBillListState {
    bills: IBill[];
}

class BillList extends React.Component<any, IBillListState> {

    public render() {
        const { bills } = this.state;
        return (
            <ul>
                {bills.map((bill: any) => <li key={bill.id}>{bill.title}</li>)}
            </ul>
        );
    }

}

export default connect(mapStateToProps)(BillList);
*/
