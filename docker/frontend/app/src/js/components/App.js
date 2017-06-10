'use strict';

import React from 'react';
import Header from './Header';
import AddSection from '../containers/AddSection';

const App = () => (
    <div className="container-fluid">
        <Header />
        <AddSection section="questionnaire" />
        <hr />
        <AddSection section="people" />
    </div>
);

export default App;
