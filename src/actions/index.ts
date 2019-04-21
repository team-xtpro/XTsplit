import { ADD_BILL } from '../constants/action-types';

export function addBill(payload: any) {
    return { type: ADD_BILL, payload };
};
