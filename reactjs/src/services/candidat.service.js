import http from '../http-common'
class CandidatDataService {
  getAll() {
    return http.get('/candidat/')
  }
  get(id) {
    return http.get(`/candidat/${id}`)
  }
  create(data) {
    return http.post('/candidat', data)
  }
  update(id, data) {
    return http.put(`/candidat/${id}`, data)
  }
  delete(id) {
    return http.delete(`/candidat/${id}`)
  }
  deleteAll() {
    return http.delete(`/candidat`)
  }
  findByGrade(grade) {
    return http.get(`/candidat?grade=${grade}`)
  }
  transition(id, etat) {
    return http.put(`/candidat/transition/${id}/${etat}`)
  }
  bloquerUser(id) {
    return http.put(`/candidat/bloquer/${id}`)
  }
  autoriserUser(id) {
    return http.put(`/candidat/autoriser/${id}`)
  }
}
export default new CandidatDataService()
