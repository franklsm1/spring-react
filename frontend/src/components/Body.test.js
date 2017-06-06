import React from 'react'
import { shallow } from 'enzyme'
import Body from './Body'

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  const component = shallow(
    <Body value={value} {...actions} />
  );

  return {
    counter: component.find('Counter')
  };
}

describe('Body component', () => {
  it('should have a counter', () => {
    const { counter } = setup();
    expect(counter).toHaveLength(1);
  });
});
