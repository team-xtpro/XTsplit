import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBill } from '../../actions';
import IBill from '../../types/IBill';

interface IAddBillForm {
    addBill(billId: IBill);
}

class AddBillForm extends Component<IAddBillForm, any> {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitBill = this.handleSubmitBill.bind(this);
    }

    public render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmitBill}>
                <input type="text" id="title" value={title} onChange={this.handleChange}/>
            </form>
        );
    }

    private handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    private handleSubmitBill(event) {
        event.preventDefault();

        const { title } = this.state;
        this.props.addBill({ title, id: '123' });
        this.setState({ title: '' });
    }

}

const mapDispatchToProps = {
    addBill,
};

export default connect(null, mapDispatchToProps)(AddBillForm);
