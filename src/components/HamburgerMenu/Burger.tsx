import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

import { Nav } from './Nav'

type Props = Pick<React.ComponentProps<typeof Nav>, 'menuList'>

export const Burger: React.FC<Props> = ({ menuList }) => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = useCallback(
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(false)
    },
    []
  )

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav menuList={menuList} open={open} close={toggleDrawer()} />
    </>
  )
}

const StyledBurger = styled.div<Pick<React.ComponentProps<typeof Nav>, 'open'>>`
  ${({ open }) => css`
    ${({ theme: { color } }) => css`
      width: 1.75rem;
      height: 1.75rem;
      z-index: 2000;
      display: none;
      @media (max-width: 460px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
      }
      div {
        width: 1.75rem;
        height: 0.25rem;
        background-color: ${open ? color.OPENED : color.CLOSED};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
          transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
          opacity: ${open ? 0 : 1};
        }
        &:nth-child(3) {
          transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      }
    `}
  `}
`
