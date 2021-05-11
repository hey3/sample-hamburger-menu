import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { action } from '@storybook/addon-actions'
import { Grid } from '@material-ui/core'

import { Burger } from './Burger'
import { Nav } from './Nav'
import { Switch } from '@components/Switch'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.BACKGROUND};
  }
`

export default { title: 'Hamburger' }

export const all: React.FC = () => (
  <>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Switch />
      <Burger menuList={sampleMenu} />
    </Grid>
    <GlobalStyle />
  </>
)

const sampleMenu: Pick<React.ComponentProps<typeof Nav>, 'menuList'>['menuList'] = [
  {
    title: 'Home',
    onClick: action('onClick Home!!'),
  },
  {
    title: 'Setting',
    onClick: action('onClick Setting!!'),
  },
]
