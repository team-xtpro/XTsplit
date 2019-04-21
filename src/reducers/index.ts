import { ADD_BILL, DELETE_BILL } from '../constants/action-types';
import IStore from '../types/IStore';

const initialState: IStore = {
    bills: [
        { title: 'test', id: '321' },
    ],
};

function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_BILL:
            return Object.assign({}, state, {
                bills: state.bills.concat(action.payload),
            });
        case DELETE_BILL:
            return Object.assign({}, state, {
                bills: state.bills.filter((bill) => bill.id !== action.payload),
            });
        default:
            return state;
    }
}

export default rootReducer;
