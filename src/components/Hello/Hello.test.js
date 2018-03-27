import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello', () => {
  const wrapper = shallow(<Hello />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Hello');
  });

  it('should render an introduction paragraph', () => {
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('should render the box with a class of box and hello', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box hello');
  });
});
