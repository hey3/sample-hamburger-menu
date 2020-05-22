import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Nav } from './Nav'

type Props = Pick<React.ComponentProps<typeof Nav>, 'menuList'>

export const Burger: React.FC<Props> = ({ menuList }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={open} menuList={menuList} />
    </>
  )
}

const StyledBurger = styled.div<Pick<React.ComponentProps<typeof Nav>, 'open'>>`
  ${({ open }) => css`
    ${({ theme: { color } }) => css`
      width: 1.75rem;
      height: 1.75rem;
      z-index: 20;
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
          // transform: ${open ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${open ? 0 : 1};
        }
        &:nth-child(3) {
          transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      }
    `}
  `}
`
