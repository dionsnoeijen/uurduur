'use strict';

import Repository from 'Repository'
import ContainerCreated from '../events/ContainerCreated'

export default class Containers extends Repository
{
    addContainer(uuid, name) {
        this.recordThat(
            new ContainerCreated(
                uuid, name
            )
        );
    }
}
