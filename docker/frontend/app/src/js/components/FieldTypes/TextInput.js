'use strict';

import React, { PropTypes } from 'react';

let TextInput = ({field}) => {

    return (
        <div>
            <label htmlFor={field.name}>{field.label}</label>
            <input
                type="text"
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
            />
        </div>
    );
};

TextInput.NAME = 'TextInput';

TextInput.PropTypes = {
    field: PropTypes.object.isRequired
};

export default TextInput;
