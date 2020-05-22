import React from 'react'
import styled, { css } from 'styled-components'
import { List, ListItem } from '@material-ui/core'

type MenuList = {
  title: string
  onClick: () => void
}

type Props = {
  open: boolean
  menuList: MenuList[]
}

export const Nav: React.FC<Props> = ({ menuList, ...props }: Props) => (
  <Ul {...props}>
    {menuList.map((menuItem, index) => (
      <ListItem button key={index} onClick={menuItem.onClick}>
        {menuItem.title}
      </ListItem>
    ))}
  </Ul>
)

const Ul = styled(List)<Pick<Props, 'open'>>`
  ${({ open }) => css`
    ${({ theme: { color } }) => css`
      display: ${open ? 'flex' : 'none'};
      list-style: none;
      margin-top: 0;
      font-size: 1rem;
      padding-left: 0.5rem;
      @media (max-width: 460px) {
        position: fixed;
        flex-flow: column nowrap;
        top: 0;
        right: 0;
        width: 40%;
        max-width: 100%;
        height: 100vh;
        max-height: 100%;
        background-color: ${color.MAIN};
        transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        div {
          justify-content: flex-start;
          padding: 10px 10px;
          color: ${color.TEXT};
          &:first-child {
            margin-top: 2.5rem;
          }
        }
      }
    `}
  `}
`
