import { configure, addParameters } from '@storybook/react'

import packageJson from '../package.json'

function loadStories () {
  require('../stories/index.js')
  // You can require as many stories as you need.
}

addParameters({
  options: {
    name: 'React Hyper Spinners',
    url: packageJson.repository.url,
    showAddonPanel: false
  }
})

configure(loadStories, module)
