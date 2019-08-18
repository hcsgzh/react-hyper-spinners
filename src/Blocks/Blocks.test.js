import React from 'react'
import renderer from 'react-test-renderer'

import { Blocks } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Blocks />).toJSON()
  expect(tree).toMatchSnapshot()
})
