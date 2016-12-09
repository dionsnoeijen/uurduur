import React from 'react';
import Header from './Header';
import VisibleContainerList from '../containers/VisibleContainerList';
import AddContainer from '../containers/AddContainer';

const App = () => (
    <div className="container-fluid">
        <Header />
        <VisibleContainerList />
        <AddContainer />
    </div>
);

export default App;
