import styled from 'styled-components'
import {
  sty_primaryLightP1,
  sty_primaryLightOnPrimary,
  sty_maskDark,
  sty_maskLight
} from 'asset/style'

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  border: 0;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  * {
    z-index: 1;
  }
`

export const DownloadButtonContainer = styled(Button)`
  padding: 2px 14px 0;
  width: 100%;
  height: 100%;
  background: ${sty_primaryLightP1};
  color: ${sty_primaryLightOnPrimary};
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  border-radius: 12px;
  &:hover,
  &:active {
    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    &::before {
      background: ${sty_maskLight};
    }
  }
  &:active {
    &::before {
      background: ${sty_maskDark};
    }
  }
`
