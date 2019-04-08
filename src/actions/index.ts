import { billsRef } from '../config/firebase';
import { FETCH_BILLS } from './types';

export const addBill = (newBill) => async (dispatch) => {
    billsRef.push().set(newBill);
};

export const deleteBill = (deleteBillId) => async (dispatch) => {
    billsRef.child(deleteBillId).remove();
};

export const fetchBills = () => async (dispatch) => {
    billsRef.on('value', snapshot => {
        dispatch({
            payload: snapshot.val(),
            type: FETCH_BILLS,
        });
    });
};
