import http from '../http-common'
import authHeader from './auth-header'

const getUserInfo = (id) => {
  return http.get(`/user/${id}`, { headers: authHeader() })
}
//fn
export default {
  getUserInfo
 //fn
}
