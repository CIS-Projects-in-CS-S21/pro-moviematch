import React from 'react';
import renderer from 'react-test-renderer';
import SettingsScreen from '../../screens/SettingsScreen';

describe('Renders snapshot as expected', () => {
  it('Settings Screen Loads', () => {
    const tree = renderer.create(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});