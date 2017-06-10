'use strict';

import React from 'react';
import ContainerList from '../components/ContainerList';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme()); // Note the invocation at the end

import jsdom from 'jsdom'
import uuid from 'uuid';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('ContainerList', function() {

    let buttons,
        onContainerClick,
        component,
        buttonProps;

    beforeEach(function() {

        onContainerClick = ((e, uuid) => {
            console.log(uuid);
        });

        buttonProps = [
            { uuid: uuid.v4(), name: 'Its all in a name' },
            { uuid: uuid.v4(), name: 'Its the name that says it all' },
            { uuid: uuid.v4(), name: 'The name, just ... the name' }
        ];

        component = mount(
            <ContainerList
                containers={ buttonProps }
                onContainerClick={ onContainerClick }
            />
        );
    });


    describe('#renders as', function() {

        it('a ContainerList component', function() {
            expect(component).to.have.type(ContainerList);
        });

        it('a ul component', function() {
            expect(component).to.have.tagName('ul');
        });

        it('a list with buttons', function() {
            expect(component.find('button').at(0)).to.have.className('btn');
            expect(component.find('button').at(0)).to.have.className('btn-info');
            expect(component).to.have.exactly(3).descendants('button');
        });

        it('a ContainerList with props', function() {
            expect(component).to.have.props([
                'containers',
                'onContainerClick'
            ]);
            expect(component)
                .to.have.props([
                    'containers',
                    'onContainerClick'
                ])
                .deep.equal([
                    buttonProps,
                    onContainerClick
                ]);
        });
    });
});
