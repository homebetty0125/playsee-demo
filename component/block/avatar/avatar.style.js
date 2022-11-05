import styled from 'styled-components'
import { sty_glassSpecialSeparators } from 'asset/style'

export const AvatarContainer = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  flex: 0 0 auto;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  background-image: ${({ backgroundimage }) => `url(${backgroundimage})`};
  background-size: cover;
  background-position: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    border: 1px solid ${sty_glassSpecialSeparators};
  }
  & > div {
    overflow: hidden;
    border-radius: 100%;
  }
`
export const Photo = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-size: cover;
  background-position: center;
`

export const VerifiedBadge = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: inline-block;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
