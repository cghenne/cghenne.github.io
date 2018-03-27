import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';
import { skills } from './constants';

describe('Skills', () => {
  const wrapper = shallow(<Skills />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Skills');
  });

  it('should render the box with a class of box and skills', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box skills');
  });

  it('should render a Skill component for each skill in the list of skills', () => {
    expect(wrapper.find('Skill').length).toEqual(skills.length);
  });
});
