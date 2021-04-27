import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../../forms/login';

describe('Renders snapshot as expected', () => {
  it('Login Screen Loads', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});