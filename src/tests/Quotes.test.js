import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../pages/Quotes';

describe('Check Quotes Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
