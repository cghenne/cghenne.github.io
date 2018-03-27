import React from 'react';
import { shallow } from 'enzyme';
import References from './References';

describe('Reference', () => {
  const wrapper = shallow(<References />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('References');
  });

  it('should render the reference paragraph', () => {
    expect(wrapper.find('p').text()).toEqual(
      'References available upon request.'
    );
  });

  it('should render the box with a class of box and references', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box references');
  });
});
