import React from 'react';
import { shallow } from 'enzyme';
import School from './School';

const fakeSchool = {
  graduation_year: 2022,
  school: 'University of Toronto',
  location: 'Toronto, CA',
  description: `Master of Science in Applied Computing (MScAC)`
};

describe('School', () => {
  const wrapper = shallow(<School {...fakeSchool} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the school in a scholl class', () => {
    expect(
      wrapper
        .find('div')
        .first()
        .prop('className')
    ).toEqual('school');
  });

  it('should render the graducation_date dates in a year class', () => {
    expect(wrapper.find('.year').text()).toEqual(
      fakeSchool.graduation_year.toString()
    );
  });

  it('should render the details of the school in a details class', () => {
    const details = wrapper.find('.details');
    expect(details.exists()).toEqual(true);
    expect(details.find('h4').text()).toEqual(fakeSchool.school);
    expect(details.find('h5').text()).toEqual(fakeSchool.location);
    expect(details.find('p').text()).toEqual(fakeSchool.description);
  });
});
