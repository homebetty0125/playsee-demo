import React from 'react'
import { FollowShareWrapper, Follow, Share } from './followShare.style'

const FollowShare = ({ handleFollowClick }) => {
  return (
    <FollowShareWrapper>
      <Follow>Follow</Follow>
      <Share>
        <img src='/icon/share_f.png' alt='share-icon' />
      </Share>
    </FollowShareWrapper>
  )
}

export default FollowShare
