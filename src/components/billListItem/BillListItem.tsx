import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBill } from '../../actions';

interface IDeleteBill {
    bill: string;
    billId: string;
}

class BillListItem extends Component<IDeleteBill> {
    render() {
        const { billId, bill } = this.props;
        return (
            <div key="billName" className="col s10 offset-s1 to-do-list-item teal">
                <h4>
                    {bill.title}{" "}
                    <span
                        onClick={() => this.handleClickDelete(billId)}
                        className="waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
                    >
                        <i className="large material-icons">done</i>
                    </span>
                </h4>
            </div>
        );
    }

    private handleClickDelete = (deleteBillId) => {
        const { bill } = this.props;
        deleteBill(deleteBillId);
    };
}

export default connect(null, {deleteBill})(BillListItem);
