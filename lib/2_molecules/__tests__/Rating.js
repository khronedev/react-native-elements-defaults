import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('Rating', () => {
    utils.defaultTests(
        'Rating',
        require('react-native-elements/src/rating/Rating'),
        require('../Rating'),
        {
            style: {
                backgroundColor: 'red',
            }
        }
    );
});