'use strict';

import Uuid from '../valueobjects/Uuid'
import Name from '../valueobjects/Name'

export default class AddContainer
{
    constructor(containersRepository) {

        this.repository = containersRepository;
    }

    handle() {

        this.repository.addContainer(
            Uuid.createFromString(uuid),
            Name.createFromString(name)
        );
    }
}
