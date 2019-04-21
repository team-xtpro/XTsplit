import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBill } from '../../actions';
import IBill from '../../types/IBill';

interface IBillListItem {
    bill: IBill;
    deleteBill(billId: string);
}

class BillListItem extends Component<IBillListItem> {

    public render() {
        const { bill } = this.props;
        return (
            <div key="billName" className="col">
                <h4>
                    {bill.title}
                    <span onClick={this.handleClickDelete}>
                        <i className="large material-icons">done</i>
                    </span>
                </h4>
            </div>
        );
    }

    private handleClickDelete = () => {
        const { bill } = this.props;
        this.props.deleteBill(bill.id);
    }

}

const mapDispatchToProps = {
    deleteBill,
};

export default connect(null, mapDispatchToProps)(BillListItem);
