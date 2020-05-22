import React from 'react'
import { action } from '@storybook/addon-actions'
import { Grid } from '@material-ui/core'

import { Burger } from './Burger'
import { Nav } from './Nav'

export default { title: 'Hamburger' }

export const all = () => (
  <Grid container direction="row" justify="flex-end" alignItems="center">
    <Burger menuList={sampleMenu} />
  </Grid>
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
