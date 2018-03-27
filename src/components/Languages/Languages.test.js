import React from 'react';
import { shallow } from 'enzyme';
import Languages from './Languages';
import { languages } from './constants';

describe('Languages', () => {
  const wrapper = shallow(<Languages />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Languages');
  });

  it('should render the box with a class of box and languages', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box languages');
  });

  it('should render a list', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });

  it('should render a Language component for each language in the list of languages', () => {
    expect(wrapper.find('Language').length).toEqual(languages.length);
  });
});
