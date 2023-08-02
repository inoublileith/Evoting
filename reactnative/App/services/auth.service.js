// import http from '../../http-common'
// const Register = (login, email, password) => {
//   return http.post('/auth/signup', {
//     login,
//     email,
//     password,
//   })
// }
// const Login = async (username, password) => {
//   const response = await http.post('/auth/signin', {
//       login: username,
//       password: password,
//     })
//   if (response.accessToken) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }
//   console.log(response.data)
//   return response.data
// }
// const Logout = () => {
//   localStorage.removeItem('user')
// }
// const GetCurrentUser = () => {
//   return JSON.parse(localStorage.getItem('user'))
// }
// const getAll = () => {
//   return http.get('/recommandations/')
// }
// export default {
//   Register,
//   Login,
//   Logout,
//   GetCurrentUser,
//   getAll,
// }

import http from '../../http-common'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Register = (login, email, password) => {
  return http.post('/auth/signup', {
   login,
   email,
   password,
  
  })
}
const Login = async (username, password) => {
  const response = await http.post('/auth/signin', {
    login: username,
    password: password,
  })
  if (response.data.accessToken) {
    const xdata= JSON.stringify(response.data)
    await AsyncStorage.setItem('user', xdata)
  
  }
  return response.data
}
const Logout = () => {
  AsyncStorage.removeItem('user')
}
const GetCurrentUser = () => {
  return AsyncStorage.getItem('user')
}

export default {
  Register,
  Login,
  Logout,
  GetCurrentUser,
  
}