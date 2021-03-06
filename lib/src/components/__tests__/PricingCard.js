import 'react-native';
import React from 'react';

const testHelperUtils = require('../../testHelperUtils');

const utils = require('../../utils');
const Overwrite = utils.Overwrite;

const name = 'PricingCard',
    __oldElement__ = require('react-native-elements/src/pricing/PricingCard'),
    __element__ = require('../PricingCard'),
    noTheme = new Overwrite(
        name,
        Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES,
        Overwrite.SCOPE.DEFAULTS,
        {}
    ),
    basicTheme = new Overwrite(
        name,
        Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES,
        Overwrite.SCOPE.DEFAULTS,
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );

describe(name, () => {
    testHelperUtils.defaultTests(name, __oldElement__, __element__, noTheme, basicTheme,
        element => {
            return React.createElement(element, {
                info: ['1 User', 'Basic Support', 'All Core Features'],
                button: { title: 'GET STARTED', icon: 'flight-takeoff' },
            }, null);
        }
    );
});
