import React, { PropTypes } from 'react'

const ContainerButton = ({ onClick, name }) => (
    <li>
        <button
            onClick={onClick}
            className="btn btn-info"
        >
            {name}
        </button>
    </li>
);

ContainerButton.propTypes = {
    uuid: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default ContainerButton;
