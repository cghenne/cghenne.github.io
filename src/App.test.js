import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have container class', () => {
    expect(wrapper.find('.container').exists()).toEqual(true);
  });

  it('should render Header', () => {
    expect(wrapper.find('Header').exists()).toEqual(true);
  });

  it('should render Hello', () => {
    expect(wrapper.find('Hello').exists()).toEqual(true);
  });

  it('should render SayHello', () => {
    expect(wrapper.find('SayHello').exists()).toEqual(true);
  });

  it('should render Experience', () => {
    expect(wrapper.find('Experience').exists()).toEqual(true);
  });

  it('should render Skills', () => {
    expect(wrapper.find('Skills').exists()).toEqual(true);
  });

  it('should render Education', () => {
    expect(wrapper.find('Education').exists()).toEqual(true);
  });

  it('should render Languages', () => {
    expect(wrapper.find('Languages').exists()).toEqual(true);
  });

  it('should render Interests', () => {
    expect(wrapper.find('Interests').exists()).toEqual(true);
  });

  it('should render References', () => {
    expect(wrapper.find('References').exists()).toEqual(true);
  });

  it('should render Divider', () => {
    expect(wrapper.find('Divider').exists()).toEqual(true);
  });
});