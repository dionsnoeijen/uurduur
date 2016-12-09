import React, { PropTypes } from 'react'
import ContainerButton from './ContainerButton'

const ContainerList = ({ containers, onContainerClick }) => (
    <ul>
    {containers.map(container =>
        <ContainerButton
            key={container.uuid}
            {...container}
            onClick={() => onContainerClick(container.uuid)}
        />
    )}
    </ul>
);

ContainerList.propTypes = {
    containers: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onContainerClick: PropTypes.func.isRequired
};

export default ContainerList;
