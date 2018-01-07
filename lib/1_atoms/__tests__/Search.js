import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

const utils = require("../../utils");

describe('with no theme applied', () => {
    let OldSearch, Search;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/search': {
            }
        };

        OldSearch = require('react-native-elements/src/input/Search').default;

        Search = utils.connectTheme(true, 'atoms/search', require('../Search'))(defaultStyles);
    });

    test('OldSearch and Search should be different', () => {
        expect(OldSearch).not.toBe(Search);
    });

    test('OldSearch renders correctly', () => {
        const tree = renderer.create(<OldSearch />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Search renders correctly', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldSearch and Search returns the same thing if no theme is applied', () => {
        const oldTree = renderer.create(<OldSearch />).toJSON();
        const tree = renderer.create(<Search />).toJSON();

        expect(oldTree).toEqual(tree);
    });
});

describe('with basic theme applied', () => {
    let OldSearch, Search;

    beforeAll(() => {
        let defaultStyles = {
            'atoms/search': {
                style: {
                    backgroundColor: 'red',
                }
            }
        };

        OldSearch = require('react-native-elements/src/input/Search').default;

        Search = utils.connectTheme(true, 'atoms/search', require('../Search'))(defaultStyles);
    });

    test('OldSearch and Search should be different', () => {
        expect(OldSearch).not.toBe(Search);
    });

    test('OldSearch renders correctly', () => {
        const tree = renderer.create(<OldSearch />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Search renders correctly', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('OldSearch and Search should be different caused by theme applied', () => {
        const oldTree = renderer.create(<OldSearch />).toJSON();
        const tree = renderer.create(<Search />).toJSON();

        expect(JSON.stringify(oldTree)).toEqual(JSON.stringify(tree));
    });
});