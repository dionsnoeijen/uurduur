'use strict';

import Component from 'react';
import { addToTable, ADD_TO_TABLE } from '../actions/actions';
import connect from 'react-redux';


const onFormSubmit = (e) => {
    e.preventDefault();

    var form = e.target,
        formData = new FormData(form);

    console.log('DISPATCH', formData);

    return function(dispatch) {
        dispatch(addToTable(formData));
    };
};

class TestForm extends Component {

    render() {
        return (
            <form onSubmit={onFormSubmit}>
                <input name="uurduur[name]" type="text" /><br />
                <input name="uurduur[project]" type="text" /><br />
                <input name="uurduur[type]" type="text" /><br />
                <input type="submit" />
            </form>
        );
    }
}

TestForm = connect(onFormSubmit)(TestForm);

export default TestForm;
