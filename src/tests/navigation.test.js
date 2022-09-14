import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navigation';

describe('Navbar component testing using snapshots', () => {
  it('Test Navbar component renders', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      );
    expect(tree).toMatchSnapshot();
  });
});