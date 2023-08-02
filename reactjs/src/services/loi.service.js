import http from '../http-common'
class LoiDataService {
  getAll() {
    return http.get('/loi/')
  }
  get(id) {
    return http.get(`/loi/${id}`)
  }
  create(data) {
    return http.post('/loi', data)
  }
  update(id, data) {
    return http.put(`/loi/${id}`, data)
  }
  delete(id) {
    return http.delete(`/loi/${id}`)
  }
  deleteAll() {
    return http.delete(`/loi`)
  }
  findByType(type) {
    return http.get(`/loi?type=${type}`)
  }
  transition(id, etat) {
    return http.put(`/loi/transition/${id}/${etat}`)
  }
}
export default new LoiDataService()
