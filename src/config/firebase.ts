import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const billsRef = databaseRef.child('bills');
