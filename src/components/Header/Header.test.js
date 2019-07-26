import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render header', () => {
    expect(wrapper.find('header').exists()).toEqual(true);
  });

  it('should render my name in h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Cathleen Ghenne');
    expect(
      wrapper
        .find('.secondary')
        .first()
        .text()
    ).toEqual('Cathleen');
  });

  it('should render my profession in h2', () => {
    expect(wrapper.find('h2').text()).toEqual('JavaScript Engineer');
    expect(
      wrapper
        .find('.secondary')
        .last()
        .text()
    ).toEqual('JavaScript');
  });
});
