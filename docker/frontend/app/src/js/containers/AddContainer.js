import React from 'react';
import { connect } from 'react-redux';
import { addContainer } from '../actions/ContainerActions';

let AddContainer = ({ dispatch }) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addContainer(input.value));
            input.value = '';
        }}>
            <input ref={node => {
                input = node
            }} />
            <button type="submit">Add Container</button>
        </form>
    )
};

AddContainer = connect()(AddContainer);

export default AddContainer;
