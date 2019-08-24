import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Blocks, Hourglass, Test } from '../src'

storiesOf('Spinners', module)
  .add('Grid', () => <Grid />)
  .add('Blocks', () => <Blocks />)
  .add('Hourglass', () => <Hourglass />)
  .add('Test', () => <Test />)
