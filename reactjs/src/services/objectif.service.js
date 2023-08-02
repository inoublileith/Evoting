import http from '../http-common'
class ObjectifDataService {
  getAll(id) {
    return http.get(`/objectif/${id}`)
  }
  get(id) {
    return http.get(`/objectif/${id}`)
  }
  create(data) {
    return http.post('/objectif', data)
  }
  update(id, data) {
    return http.put(`/objectif/${id}`, data)
  }
  delete(id) {
    return http.delete(`/objectif/${id}`)
  }
  deleteAll() {
    return http.delete(`/objectif`)
  }
  findByDomaine(domaine) {
    return http.get(`/objectif?domaine=${domaine}`)
  }
  transition(id, etat) {
    return http.put(`/objectif/transition/${id}/${etat}`)
  }
}
export default new ObjectifDataService()
