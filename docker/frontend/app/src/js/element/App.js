'use strict';

import React, { PropTypes } from 'react';
import TestForm from '../form/TestForm';
import Table from '../element/Table';

import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Test form</h1>
                <TestForm />
                <h1>Data</h1>
                <Table items={this.props.items.data} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(App);
