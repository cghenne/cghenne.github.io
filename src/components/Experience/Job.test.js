import React from 'react';
import { shallow } from 'enzyme';
import Job from './Job';

const fakeJob = {
  start_date: 'April 2018',
  end_date: null,
  position: 'Lead Front-End Engineer',
  company: 'NA',
  location: 'Toronto, CA',
  description: null,
  tech_stack: null
};

describe('Job', () => {
  const wrapper = shallow(<Job {...fakeJob} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the job in a job class', () => {
    expect(
      wrapper
        .find('div')
        .first()
        .prop('className')
    ).toEqual('job');
  });

  it('should render "start_date - Present" if the end_date is not defined', () => {
    expect(wrapper.find('.dates').text()).toEqual(
      `${fakeJob.start_date} - Present`
    );
  });

  it('should render "start_date - end_date" if the end_date is defined', () => {
    const end_date = 'June 2025';
    wrapper.setProps({ end_date });
    expect(wrapper.find('.dates').text()).toEqual(
      `${fakeJob.start_date} - ${end_date}`
    );
  });

  it('should render the details of the job in a details class', () => {
    const details = wrapper.find('.details');
    expect(details.exists()).toEqual(true);
    expect(details.find('h4').text()).toEqual(fakeJob.position);
    expect(
      details
        .find('h5')
        .first()
        .text()
    ).toEqual(fakeJob.company);
    expect(
      details
        .find('h5')
        .last()
        .text()
    ).toEqual(fakeJob.location);
  });

  it('should not render the description if the description is not defined', () => {
    expect(wrapper.find('.description').exists()).toEqual(false);
  });

  it('should render the description if the description is defined', () => {
    const description = 'Awesome Job Description';
    wrapper.setProps({ description });
    expect(wrapper.find('.description').text()).toEqual(description);
  });

  it('should not render the tech stack if the tech stack is not defined', () => {
    expect(wrapper.find('.tech-stack').exists()).toEqual(false);
  });

  it('should render the tech stack if the tech stack is defined', () => {
    const tech_stack = 'Awesome Tech Stack';
    wrapper.setProps({ tech_stack });
    expect(wrapper.find('.tech-stack').html()).toContain(tech_stack);
  });
});
