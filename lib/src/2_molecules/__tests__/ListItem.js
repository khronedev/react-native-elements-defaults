import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as utils from '../../testHelperUtils';

describe('ListItem', () => {
    utils.defaultTests(
        'ListItem',
        require('react-native-elements/src/list/ListItem'),
        require('../ListItem'),
        {
            containerStyle: {
                backgroundColor: 'red',
            }
        }
    );
});