import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import App from './App/App'

describe('<App />', () => {
  // define our tests in here
  let wrapper;
  beforeEach(() => {
  	wrapper = shallow(<App />);
  });
  it('has a Router Component', () => {
  	expect(wrapper.find('Router')).to.have.length(1);
  });

})