import { ADD_BILL } from '../constants/action-types';
import IStore from '../types/IStore';

const initialState: IStore = {
    bills: [
        { title: 'test', id: '123' },
    ],
};

function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_BILL:
            return Object.assign({}, state, {
                bills: state.bills.concat(action.payload),
            });
        default:
            return state;
    }
}

export default rootReducer;
