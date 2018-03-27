import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education';
import { education } from './constants';

describe('Education', () => {
  const wrapper = shallow(<Education />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Education');
  });

  it('should render the box with a class of box and education', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box education');
  });

  it('should render a School component for each school in the list of schools', () => {
    expect(wrapper.find('School').length).toEqual(education.length);
  });
});
