import React from 'react';
import { shallow } from 'enzyme';
import Language from './Language';

const fakeLanguage = {
  label: 'Chinese',
  level: 'Inexistent'
};

describe('Language', () => {
  const wrapper = shallow(<Language {...fakeLanguage} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the language in a li tag', () => {
    expect(wrapper.find('li').exists()).toEqual(true);
  });

  it('should render the language label in bold', () => {
    expect(wrapper.find('.bold').text()).toEqual(fakeLanguage.label);
  });

  it('should render the language level', () => {
    expect(wrapper.find('li').text()).toContain(fakeLanguage.level);
  });
});
