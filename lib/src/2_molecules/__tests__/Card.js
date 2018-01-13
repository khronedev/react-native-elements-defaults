import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Card', () => {
    utils.defaultTests(
        'Card',
        require('react-native-elements/src/card/Card'),
        require('../Card'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});