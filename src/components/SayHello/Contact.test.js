import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

const fakeContact = {
  type: 'home_town',
  icon: null,
  link: 'Waterloo, Belgium',
  url: 'https://www.google.ca/maps/place/Waterloo,+Belgium',
  isPrivate: false
};

describe('Contact', () => {
  const wrapper = shallow(<Contact {...fakeContact} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the contact in a link that has contact class', () => {
    expect(wrapper.find('a').prop('className')).toEqual('contact');
    expect(wrapper.find('a').prop('href')).toEqual(fakeContact.url);
    expect(wrapper.find('a').text()).toContain(fakeContact.link);
    expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });

  it('should render the icon image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(fakeContact.icon);
    expect(wrapper.find('img').prop('alt')).toEqual(fakeContact.type);
  });

  it('should add the private class if the contact is private', () => {
    wrapper.setProps({ isPrivate: true });
    expect(wrapper.find('a').prop('className')).toEqual('contact private');
  });
});
