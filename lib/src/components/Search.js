const utils = require('../utils');
const classComponentCompose = require('../compose/classComponent');

const COMPOSE_NAME = 'Search';
const compose = classComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/input/Search'),
        compose,
        true,
    ),
};
