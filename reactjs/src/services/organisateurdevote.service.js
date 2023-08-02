import http from '../http-common'
class OrganisateurdevoteDataService {
  getAll() {
    return http.get('/organisateurdevote/')
  }
  get(id) {
    return http.get(`/organisateurdevote/${id}`)
  }
  create(data) {
    return http.post('/organisateurdevote', data)
  }
  update(id, data) {
    return http.put(`/organisateurdevote/${id}`, data)
  }
  bloquerUser(id) {
    return http.put(`/organisateurdevote/bloquer/${id}`)
  }
  autoriserUser(id) {
    return http.put(`/organisateurdevote/autoriser/${id}`)
  }
  delete(id) {
    return http.delete(`/organisateurdevote/${id}`)
  }
  deleteAll() {
    return http.delete(`/organisateurdevote`)
  }
  findByFonction(fonction) {
    return http.get(`/organisateurdevote?fonction=${fonction}`)
  }
  transition(id, etat) {
    return http.put(`/organisateurdevote/transition/${id}/${etat}`)
  }
}
export default new OrganisateurdevoteDataService()
