import React from 'react';
import { shallow } from 'enzyme';
import PrintDivider from './PrintDivider';

describe('PrintDivider', () => {
  const wrapper = shallow(<PrintDivider />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the print-divider class', () => {
    expect(wrapper.find('.print-divider').exists()).toEqual(true);
  });
});
