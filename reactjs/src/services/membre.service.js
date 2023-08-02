import http from '../http-common'
class MembreDataService {
  getAll() {
    return http.get('/membre/')
  }
  getAllbyIdP(id) {
    return http.get(`/membre/programme/${id}`)
  }
  get(id) {
    return http.get(`/membre/${id}`)
  }
  create(data) {
    return http.post('/membre', data)
  }
  update(id, data) {
    return http.put(`/membre/${id}`, data)
  }
  delete(id) {
    return http.delete(`/membre/${id}`)
  }
  deleteAll() {
    return http.delete(`/membre`)
  }
  findByProfession(profession) {
    return http.get(`/membre?profession=${profession}`)
  }
  transition(id, etat) {
    return http.put(`/membre/transition/${id}/${etat}`)
  }
}
export default new MembreDataService()
