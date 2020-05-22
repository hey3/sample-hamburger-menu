import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { ThemeProvider } from '../src/themes/ThemeProvider'

addParameters({
  options: {
    theme: create({
      base: 'light',
    }),
  },
})
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(addReadme)
addDecorator((Story) => (
  <ThemeProvider>
  <Story />
  </ThemeProvider>
))
