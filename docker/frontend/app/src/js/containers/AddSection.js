'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SectionForm from '../components/Section/SectionForm';
import { fetchSectionFormFields } from '../actions/SectionActions';
import Preloader from '../components/Preloader';

class AddSection extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(fetchSectionFormFields(this.props.section));
    }

    render() {
        let form = this.props.state.sections.formFields[this.props.section];
        let isFetching =
            (
                form !== undefined &&
                form.isFetching !== undefined
            ) ?
            form.isFetching : true;

        let fields = !isFetching ? form.fields : undefined;

        return (
            isFetching ?
                <Preloader />  :
                <SectionForm
                    section={this.props.section}
                    fields={fields}
                />
        );
    }
}

AddSection.PropTypes = {
    section: PropTypes.string.isRequired
};

AddSection = connect(state => ({
    state: state
}))(AddSection);

export default AddSection;
