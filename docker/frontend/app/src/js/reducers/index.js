import { combineReducers } from 'redux'
import containers from './containers'
import sections from './sections'

const todoApp = combineReducers({
    containers,
    sections
});

export default todoApp
