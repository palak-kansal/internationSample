import React from 'react';
import { shallow } from 'enzyme';
import Venue from './index';

describe("Venue", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Venue />);
  });
});