const utils = require('../utils');
const functionalComponentCompose = require('../compose/funcionalComponent');

const COMPOSE_NAME = 'SocialIcon';
const compose = functionalComponentCompose.construct(COMPOSE_NAME);

module.exports = {
    name: COMPOSE_NAME,
    compose,
    override: new utils.ModuleOverride(
        COMPOSE_NAME,
        require('react-native-elements/src/social/SocialIcon'),
        compose,
        true,
    ),
};