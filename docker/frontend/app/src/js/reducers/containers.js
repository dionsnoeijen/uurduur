import uuid from 'uuid'

const container = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CONTAINER':
            return {
                uuid: uuid.v4(),
                name: action.name
            };
        default:
            return state
    }
};

const containers = (state = [], action) => {
    switch (action.type) {
        case 'OPEN_CONTAINER':
            console.log('IMPLEMENT OPEN CONTAINER');
            return state;
        case 'ADD_CONTAINER':
            return [
                ...state,
                container(undefined, action)
            ];
        default:
            return state
    }
};

export default containers
