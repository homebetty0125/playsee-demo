import { AvatarContainer, VerifiedBadge, Photo } from './avatar.style'
import { VERIFIED_STATUS } from 'asset/constant'

const BADGE = {
  width: 24,
  height: 24
}

const Avatar = props => {
  // console.log('avatar', props)
  const { level, width, height, isVerified, url } = props

  return (
    <AvatarContainer width={width} height={height}>
      <Photo
        width={width}
        height={height}
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      {level === VERIFIED_STATUS.isVerified && isVerified && (
        <VerifiedBadge {...BADGE}>
          <img src='/icon/verified_f_profile.png' alt='verified' />
        </VerifiedBadge>
      )}
    </AvatarContainer>
  )
}

export default Avatar
