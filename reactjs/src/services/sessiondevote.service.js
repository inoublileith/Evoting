import http from '../http-common'
class SessiondevoteDataService {
  getAll() {
    return http.get('/sessiondevote/')
  }
  get(id) {
    return http.get(`/sessiondevote/${id}`)
  }
  create(data) {
    return http.post('/sessiondevote/', data)
  }
  update(id, data) {
    return http.put(`/sessiondevote/${id}`, data)
  }
  delete(id) {
    return http.delete(`/sessiondevote/${id}`)
  }
  deleteAll() {
    return http.delete(`/sessiondevote`)
  }
  findByRef(ref) {
    return http.get(`/sessiondevote?reference=${ref}`)
  }
  transition(id, etat) {
    return http.put(`/sessiondevote/transition/${id}/${etat}`)
  }
  getStats(id) {
    return http.get(`/sessiondevote/stats/get/${id}`)
  }
}
export default new SessiondevoteDataService()
