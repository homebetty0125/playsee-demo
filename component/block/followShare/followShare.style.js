import styled from 'styled-components'
import { sty_labelLightL3 } from 'asset/style'

export const FollowShareWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Follow = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${sty_labelLightL3};
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`

export const Share = styled.div`
  margin-left: 8px;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${sty_labelLightL3};
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`
