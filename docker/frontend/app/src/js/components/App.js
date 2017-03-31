'use strict';

import React from 'react';
import Header from './Header';
import VisibleContainerList from '../containers/VisibleContainerList';
import AddContainer from '../containers/AddContainer';
import AddSection from '../containers/AddSection';

const App = () => (
    <div className="container-fluid">
        <Header />
        <VisibleContainerList />
        <AddContainer />
        <AddSection section="questionnaire"/>
    </div>
);

export default App;
