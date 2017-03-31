'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let AddSection = ({section, dispatch}) => {

    return (
        <div>Add section</div>
    );
};

AddSection.PropTypes = {
    section: PropTypes.string.isRequired
};

AddSection = connect()(AddSection);

export default AddSection;
