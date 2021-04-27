import React from 'react';
import renderer from 'react-test-renderer';
import RegisterScreen from '../../forms/register';

describe('Renders snapshot as expected', () => {
  it('Register Screen Loads', () => {
    const tree = renderer.create(<RegisterScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});