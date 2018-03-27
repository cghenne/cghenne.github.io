import React from 'react';
import { shallow } from 'enzyme';
import Interests from './Interests';
import { interests } from './constants';

describe('Interests', () => {
  const wrapper = shallow(<Interests />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Personal Interests');
  });

  it('should render the box with a class of box and interests', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box interests');
  });

  it('should render a list', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });

  it('should render a Interest component for each interest in the list of interests', () => {
    expect(wrapper.find('Interest').length).toEqual(interests.length);
  });
});
