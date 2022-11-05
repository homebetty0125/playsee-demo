// api
import { ProfileApi } from 'asset/api'

// api url
import {
  PROFILE_HOST_ENDPOINT,
  PROFILE_HOST_API,
  PROFILE_LIST_HOST_API
} from 'asset/constant'

/* choose SCSS or Styled-components */
// import classes from './profile.module.scss'
import {
  ProfileContainer,
  ProfileUserName,
  ProfileUsernId,
  ProfileDescription,
  ProfileBlockNumber,
  ProfileBlockField,
} from 'component/style/profile.style'

// component
import Avatar from 'component/block/avatar'
import FollowShare from 'component/block/followShare'

// constant
// const headShotSize = 104

const Profile = props => {
  // you can get all data from these props
  const { profileInfo, profileList } = props
  console.log('Profile', profileList.post_list)

  return (
    <ProfileContainer>
      <div className="header">
        <Avatar
          width="104"
          height="104"
          url={profileInfo.user.head_shot.large_headshot_url}
          level={profileInfo.user.level}
        />
        <div className="user-info">
          <ProfileUserName>{profileInfo.user.name}</ProfileUserName>
          <ProfileUsernId>{profileInfo.user.user_id}</ProfileUsernId>
        </div>
      </div>

      <div className="follow-info">
        <div className="grid">
          <ProfileBlockNumber>{profileInfo.count.follower}</ProfileBlockNumber>
          <ProfileBlockField>Followers</ProfileBlockField>
        </div>
        <div className="grid">
          <ProfileBlockNumber>{profileInfo.count.following}</ProfileBlockNumber>
          <ProfileBlockField>Following</ProfileBlockField>
        </div>
        <div className="grid">
          <ProfileBlockNumber>{profileInfo.count.post}</ProfileBlockNumber>
          <ProfileBlockField>Videos</ProfileBlockField>
        </div>
      </div>

      <FollowShare />

      <ProfileDescription>{profileInfo.profile.public_info.about}</ProfileDescription>

      <div className="list-wrap">
        <div className="lists">
          {
            profileList.post_list.map(({ post_id, display_resources, geo }) => (
              <div
                key={post_id}
                className="item"
              >
                <div className="thumb">
                  <img src={display_resources.cover_url} alt="" />
                </div>
                <span className="geo-name">{geo.poi.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </ProfileContainer>
  )
}

export const getServerSideProps = async context => {
  // call API here
  let profileInfo = {}
  let profileList = {}
  const { query } = context
  const { profileId } = query

  const headers = { Authorization: PROFILE_HOST_ENDPOINT }

  // info
  const infoParams = {
    user_id: decodeURIComponent(profileId)
  }

  try {
    const url = PROFILE_HOST_API
    const { data } = await ProfileApi.post(url, infoParams, { headers })
    if (!data.error && data) {
      profileInfo = data
    } else {
      throw console.log(`error: ${data.error?.code}`)
    }
  } catch (error) {
    console.log(`error`, error)
  }

  // list
  const listParams = {
    user_id: decodeURIComponent(profileId),
    page_token: '' // first page is empty
  }

  try {
    const url = PROFILE_LIST_HOST_API
    const { data } = await ProfileApi.post(url, listParams, { headers })
    if (!data.error && data) {
      profileList = data
    } else {
      throw console.log(`hashtagError: ${data.error?.code}`)
    }
  } catch (error) {
    console.log(`error`, error)
  }

  return {
    props: {
      // the response data
      profileInfo,
      profileList
    }
  }
}

export default Profile
