import React from 'react';
import { shallow } from 'enzyme';
import Skill from './Skill';

const fakeSkill = {
  label: 'Cooking',
  list: ['Pastry', 'Oven', 'Slow Cooker']
};

describe('Skill', () => {
  const wrapper = shallow(<Skill {...fakeSkill} />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the skill in a skill class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('skill');
  });

  it('should render the skill label in an h4 tag', () => {
    expect(wrapper.find('h4').text()).toEqual(fakeSkill.label);
  });

  it('should render a list', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });

  it('should render the list of skill', () => {
    const list = wrapper.find('li');
    expect(list.length).toEqual(fakeSkill.list.length);
    list.map((elem, index) =>
      expect(elem.text()).toEqual(fakeSkill.list[index])
    );
  });
});
