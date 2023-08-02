import http from '../http-common'
import authHeader from './auth-header'
const getPublicContent = () => {
  return http.get('/namespace/public')
}
const getUserBoard = () => {
  return http.get('/namespace/user', { headers: authHeader() })
}
const getAnalysteBoard = () => {
  return http.get('/namespace/analyste', { headers: authHeader() })
}
const getAdminBoard = () => {
  return http.get('/namespace/admin', { headers: authHeader() })
}

const getUserInfo = (id) => {
    return http.get(`/user/info/${id}`) 
}

export default {
  getPublicContent,
  getUserBoard,
  getAnalysteBoard,
  getAdminBoard,
  getUserInfo,
}
