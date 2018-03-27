import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';
import { jobs } from './constants';

describe('Experience', () => {
  const wrapper = shallow(<Experience />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Experience');
  });

  it('should render the box with a class of box and experience', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box experience');
  });

  it('should render a Job component for each job in the list of jobs', () => {
    expect(wrapper.find('Job').length).toEqual(jobs.length);
  });
});
