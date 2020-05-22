import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Grid } from '@material-ui/core'

import { ThemeProvider } from '@themes/ThemeProvider'
import { Burger } from '@components/HamburgerMenu'
import { Switch } from '@components/Switch'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.BACKGROUND};
  }
`

const sampleMenu: React.ComponentProps<typeof Burger>['menuList'] = [
  {
    title: 'Home',
    onClick: () => console.log('onClick Home!!'),
  },
  {
    title: 'Setting',
    onClick: () => console.log('onClick Setting!!'),
  },
]

ReactDOM.render(
  <ThemeProvider>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Switch />
      <Burger menuList={sampleMenu} />
    </Grid>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
)
