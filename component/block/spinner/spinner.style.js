import styled, { keyframes } from 'styled-components'
import { sty_colorGrey300 } from 'asset/style'

const spinnerSize = 4

export const animation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  25% {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  75% {
    transform: translate(-50%, -50%) rotate(225deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(315deg);
  }
`

export const SpinnerContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border-width: ${spinnerSize}px;
  border-style: solid;
  border-color: ${sty_colorGrey300} ${sty_colorGrey300} ${sty_colorGrey300}
    transparent;
  animation: ${animation} 1s linear infinite;

  &:before,
  &:after {
    content: '';
    width: ${spinnerSize}px;
    height: ${spinnerSize}px;
    border-radius: 100%;
    background: ${sty_colorGrey300};
    position: absolute;
    left: -1px;
  }

  &:before {
    top: -1px;
  }

  &:after {
    bottom: -1px;
  }
`
