'use strict';

import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';
import ContainerButton from '../components/ContainerButton';
import { expect } from 'chai';
import uuid from 'uuid';

const renderer = ReactTestUtils.createRenderer();

describe('ContainerButton', function() {

    let component,
        id,
        onClick,
        name;

    beforeEach(function() {

        id = uuid.v4();
        onClick = (e => {});
        name = 'I have a name';

        renderer.render(<ContainerButton
            uuid={ id }
            onClick={ onClick }
            name={ name }
        />);

        component = renderer.getRenderOutput();
    });


    describe('#renders as', function() {

        it('should return a li component', function() {
            expect(component.type).to.be.equal('li');
        });

        it('should have a button as a child with a name', function() {
            expect(component.props.children).to.be.deep.equal(
                <button onClick={ onClick } className="btn btn-info">{ name }</button>
            );
        });
    });
});
