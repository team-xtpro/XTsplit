import React from 'react';
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
        const { bills } = this.props;
        return (
            <ul>
                {bills.map((bill: any) => <li key={bill.id}>{bill.title}</li>)}
            </ul>
        );
    }

}

export default connect(mapStateToProps)(BillList);
