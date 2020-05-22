import React from 'react'
import styled, { css } from 'styled-components'
import { Drawer, ListItem } from '@material-ui/core'

type Menu = {
  title: string
  onClick: () => void
}

type Props = {
  open: boolean
  close: (event: React.KeyboardEvent | React.MouseEvent) => void
  menuList: Menu[]
}

export const Nav: React.FC<Props> = ({ menuList, open, close }: Props) => (
  <StyledDrawer anchor="right" open={open} onClose={close}>
    {menuList.map((menuItem, index) => (
      <ListItem button key={index} onClick={menuItem.onClick}>
        {menuItem.title}
      </ListItem>
    ))}
  </StyledDrawer>
)

const StyledDrawer = styled(Drawer)`
  ${() => css`
    ${({ theme: { color } }) => css`
      .MuiDrawer-paper {
        font-size: 1rem;
        @media (max-width: 460px) {
          width: 40%;
          max-width: 100%;
          height: 100vh;
          max-height: 100%;
          background-color: ${color.MAIN};
          div {
            color: ${color.TEXT};
            &:first-child {
              margin-top: 2.5rem;
            }
          }
        }
      }
    `}
  `}
`
