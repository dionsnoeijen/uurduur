'use strict';

import React from 'react';

export default class TableRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>Col2</td>
            </tr>
        );
    }

}
