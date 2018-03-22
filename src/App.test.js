import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have container class', () => {
    expect(wrapper.find('.container').exists()).toEqual(true);
  });

  it('should render Header', () => {
    expect(wrapper.find('Header').exists()).toEqual(true);
  });
});
