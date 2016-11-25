'use strict';

import React, { PropTypes } from 'react';
import TableRow from './TableRow';

export default class Table extends React.Component {

    render() {

        // console.log('TABLE ITEMS', this.props.items.data);

        return (
            <table>
                <tbody>
                    {this.props.items.map((item, i) =>
                        <TableRow key={i} text={item.text} />
                    )}
                </tbody>
            </table>
        );
    }
}

// Table.propTypes = {
//     items: PropTypes.array.required
// };
