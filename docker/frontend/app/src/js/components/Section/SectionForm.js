'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextInput from '../FieldTypes/TextInput';
import { saveSection } from '../../actions/SectionActions';

class SectionForm extends Component {

    constructor(props) {
        super(props);
    }

    getFields() {
        let fields = [];
        for (let fieldKey in this.props.fields) {
            if (this.props.fields.hasOwnProperty(fieldKey)) {
                let field = this.props.fields[fieldKey];
                switch (field.type) {
                    case 'TextInput':
                        fields.push(<TextInput key={fieldKey} field={field} />);
                    break;
                }
            }
        }
        return fields;
    }

    onSubmit(e) {
        e.preventDefault();

        let form = e.currentTarget;
        let formData = new FormData(form);

        this.props.dispatch(saveSection(this.props.section, formData));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} name={this.props.section}>
                {this.getFields()}
                <input type="submit" name={this.props.section} />
            </form>
        );
    }
}

SectionForm = connect()(SectionForm);

SectionForm.PropTypes = {
    fields: PropTypes.object.isRequired,
    section: PropTypes.string.isRequired
};

export default SectionForm;
