import axios from 'axios'

const ProfileApi = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

export { ProfileApi }
