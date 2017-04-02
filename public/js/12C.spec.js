/* Snap shot Testing - renders out component and compares the last snapshot */
import React from 'react'
import Search from './12C'
// need this module for Jest
// import renderer from 'react-test-renderer'
import ShowCard from './12D'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import preload from '../../public/data.json'

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

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(preload.shows.length).toEqual(component.find(ShowCard).length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  // fire event and assign field value
  component.find('input').simulate('change', { target: {value: searchWord} })
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
