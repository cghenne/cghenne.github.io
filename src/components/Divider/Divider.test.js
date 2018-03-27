import React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';

describe('Divider', () => {
  const wrapper = shallow(<Divider />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the divider class', () => {
    expect(wrapper.find('.divider').exists()).toEqual(true);
  });
});
