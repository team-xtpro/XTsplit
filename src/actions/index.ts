import { ADD_BILL, DELETE_BILL } from '../constants/action-types';

export function addBill(payload: any) {
    return { type: ADD_BILL, payload };
}

export function deleteBill(payload: any) {
    return { type: DELETE_BILL, payload };
}
