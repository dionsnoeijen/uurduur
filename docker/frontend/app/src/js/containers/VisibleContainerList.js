import uuid from 'uuid'
import { connect } from 'react-redux'
import { openContainer } from '../actions/ContainerActions'
import ContainerList from '../components/ContainerList'

const getInitialStateContainers = () => {
    return [
        {
            uuid: uuid.v4(),
            name: 'Name 1'
        },
        {
            uuid: uuid.v4(),
            name: 'Name 2'
        }
    ];
};

const mapStateToProps = (state) => {
    return {
        containers: [
            ...getInitialStateContainers(),
            ...state.containers
        ]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onContainerClick: (id) => {
            dispatch(openContainer(id));
        }
    }
};

const VisibleContainerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerList);

export default VisibleContainerList
