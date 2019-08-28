import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Blocks, Hourglass, Gear, Pacman, Circles } from '../src'

storiesOf('Spinners', module)
  .add('Grid', () => <Grid />)
  .add('Blocks', () => <Blocks />)
  .add('Hourglass', () => <Hourglass />)
  .add('Gear', () => <Gear />)
  .add('Pacman', () => <Pacman />)
  .add('Circles', () => <Circles />)
