import http from '../http-common'
const registerjiji = (nom, prenom, login, email, password, profil) => {
  console.log(' service ', profil)
  return http.post('/auth/signup', {
    nom,
    prenom,
    login,
    email,
    password,
    'roles'  : [profil],
  })
}
const loginjiji = (login, password) => {
  return http
    .post('/auth/signin', {
      login,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}
const logoutjiji = () => {
  localStorage.removeItem('user')
}
export default {
  registerjiji,
  loginjiji,
  logoutjiji,
}
