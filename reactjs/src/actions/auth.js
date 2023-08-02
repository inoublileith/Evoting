import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types'
import AuthService from '../services/auth.service'
export const registerAction = (nom, prenom, login, email, password, profil) => (
  dispatch
) => {
  return AuthService.registerjiji(nom, prenom, login, email, password, profil).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: REGISTER_FAIL,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })
      return Promise.reject()
    }
  )
}
export const loginAction = (login, password) => (dispatch) => {
  return AuthService.loginjiji(login, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({
        type: LOGIN_FAIL,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })
      return Promise.reject()
    }
  )
}
export const logout = () => (dispatch) => {
  AuthService.logoutjiji()
  dispatch({
    type: LOGOUT,
  })
}
