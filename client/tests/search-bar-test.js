import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import SearchBar from '../components/search-bar'


describe('<SearchBar /> component', function () {
  it('should call updateValue method onChange event ', (done) => {
    const searchBar = ReactTestUtils.renderIntoDocument(
      <SearchBar onTermChange={(term) => {
      expect(term).toEqual("some value")
      done()
    }} />
    )
    const inputElm = ReactTestUtils.findRenderedDOMComponentWithTag(searchBar, "input");
    inputElm.value = 'some value';
    ReactTestUtils.Simulate.change(inputElm)

  })
})
