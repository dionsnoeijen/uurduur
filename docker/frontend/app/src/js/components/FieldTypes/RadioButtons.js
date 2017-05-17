'use strict';

import React, { PropTypes } from 'react';

let RadioButtons = ({field}) => {

    function getOptions() {
        let options = [];
        for (let value in field.options) {
            options.push(<option value={value}>{field.options[value]}</option>);
        }
        return options;
    }

    return (
        <div>
            <label htmlFor={field.name}>{field.label}</label>
            <select name={field.name} id={field.name}>
                {getOptions()}
            </select>
        </div>
    );
};

RadioButtons.NAME = 'RadioButtons';

RadioButtons.PropTypes = {
    field: PropTypes.object.isRequired
};

export default RadioButtons;
