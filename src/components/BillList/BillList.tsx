import React from 'react';
import { connect } from 'react-redux';
import IBill from '../../types/IBill';
import BillListItem from '../BillListItem/BillListItem';

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
                {bills.map((bill: any) => <BillListItem key={bill.id} bill={bill} />)}
            </ul>
        );
    }

}

export default connect(mapStateToProps)(BillList);
