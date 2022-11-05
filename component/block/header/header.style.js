import styled from 'styled-components'
import {
  sty_backgroundLight1st,
  sty_backgroundLight2nd,
  sty_padMedia,
  sty_containerMinWidth
} from 'asset/style'

export const HeaderContainer = styled.div`
  background-color: transparent;
  width: 100%;
  min-width: ${sty_containerMinWidth}px;
  height: 64px;
  padding: 16px 40px;
  border-bottom: 1px solid ${sty_backgroundLight2nd};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  transition: background-color ease-in 0.2s;
  background-color: ${sty_backgroundLight1st};
  @media all and (max-width: ${`${sty_padMedia - 1}px`}) {
    width: 100vw;
    padding: 16px;
    z-index: 4;
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 auto;
  cursor: pointer;
  @media all and (max-width: ${`${sty_padMedia - 1}px`}) {
    z-index: 2;
  }
  svg {
    flex: 0 0 auto;
    width: 116px;
    height: 56px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`
