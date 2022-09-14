import React from "react";
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Check Home Component', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})