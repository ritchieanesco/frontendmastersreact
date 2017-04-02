/* Snap shot Testing - renders out component and compares the last snapshot */
import React from 'react'
import Search from './12C'
// need this module for Jest
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Jest is the test runner being used
// Jest is similar to Jasmine

// commandline run run npm run test or npm test or npm t

// Jest Testing
// test('Search snapshot test', () => {
//   const component = renderer.create(<Search />)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// Enzyme test
test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
