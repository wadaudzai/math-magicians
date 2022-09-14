import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Check if Calculator is rendering', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
