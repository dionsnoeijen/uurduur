'use strict';

import React from 'react';
import { ADD_TO_TABLE } from '../actions/actions';

export default class TestForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="uurduur[name]" type="text" /><br />
                <input name="uurduur[project]" type="text" /><br />
                <input name="uurduur[type]" type="text" /><br />
                <input type="submit" />
            </form>
        );
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
}