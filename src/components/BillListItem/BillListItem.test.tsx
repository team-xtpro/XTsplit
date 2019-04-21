import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import BillListItem from './BillListItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        (
            <Provider store={store}>
                <BillListItem key="0" />
            </Provider>
        ),
        div);
    ReactDOM.unmountComponentAtNode(div);
});
