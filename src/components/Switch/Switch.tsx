import React from 'react'
import { Switch as MaterialSwitch } from '@material-ui/core'
import { useTheme } from '../../hooks/useTheme'

export const Switch: React.FC = () => {
  const [checked, setChecked] = React.useState(false)
  const { setColorMode } = useTheme()

  const toggleChecked = () => {
    setChecked((prev) => !prev)
    setColorMode()
  }

  return <MaterialSwitch checked={checked} onChange={toggleChecked} />
}
