import React from 'react';
import { shallow } from 'enzyme';
import Interest from './Interest';

const fakeInterest = {
  label: 'Board Games',
  description: 'Monopoly, Settlers of Catans, Cards Against Humanity'
};

describe('Interest', () => {
  const wrapper = shallow(<Interest {...fakeInterest} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the interest in a li tag', () => {
    expect(wrapper.find('li').exists()).toEqual(true);
  });

  it('should render the interest label in bold', () => {
    expect(wrapper.find('.bold').text()).toEqual(fakeInterest.label);
  });

  it('should render the interest description', () => {
    expect(wrapper.find('li').text()).toContain(fakeInterest.description);
  });
});
