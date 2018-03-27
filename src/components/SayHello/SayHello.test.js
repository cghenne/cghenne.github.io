import React from 'react';
import { shallow } from 'enzyme';
import SayHello from './SayHello';
import { contacts } from './constants';

describe('SayHello', () => {
  const wrapper = shallow(<SayHello showPrivateDetails={true} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    expect(wrapper.find('h3').text()).toEqual('Say Hello');
  });

  it('should render the box with a class of box and say-hello', () => {
    expect(wrapper.find('div').prop('className')).toEqual('box say-hello');
  });

  it('should render a Contact component for each contact in the list of contacts', () => {
    expect(wrapper.find('Contact').length).toEqual(contacts.length);
  });

  it('should render only public contacts if showPrivateDetails is set to false', () => {
    wrapper.setProps({ showPrivateDetails: false });
    expect(wrapper.find('Contact').length).toEqual(
      contacts.filter(contact => contact.isPrivate).length
    );
  });
});
