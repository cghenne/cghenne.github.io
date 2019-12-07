import React from 'react';
import { shallow } from 'enzyme';
import Volunteering from './Volunteering';
import { jobs } from './constants';

describe('Volunteering', () => {
  const wrapper = shallow(<Volunteering />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Volunteering');
  });

  it('should render the box with a class of box and experience', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box volunteering');
  });

  it('should render a Job component for each job in the list of jobs', () => {
    expect(wrapper.find('Job').length).toEqual(
      jobs.filter(job => job.volunteer).length
    );
  });
});
