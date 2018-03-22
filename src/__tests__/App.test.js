import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render my name', () => {
    const name = 'Cathleen Ghenne';
    expect(wrapper.contains(name)).toEqual(true);
  });
});
