import React from 'react';
import { Counter } from "./Counter";
import { shallow } from 'enzyme';

let component;

const mockProps = {
  counter: 0,
  increment: jest.fn(() => 1),
  decrement: jest.fn(() => -1)
};

describe("Counter Component", () => {
  beforeEach(() => {
    component = shallow(<Counter {...mockProps} />);
  });

  it("displays the counter value", () => {
    expect(component.find("p").text()).toBe("0");
  });

  it("triggers the increment function", () => {
    component.find("#increment").simulate("click");
    expect(mockProps.increment.mock.results[0].value).toBe(1);
  });

  it("triggers the decrement function", () => {
    component.find("#decrement").simulate("click");
    expect(mockProps.decrement.mock.results[0].value).toBe(-1);
  });
});
