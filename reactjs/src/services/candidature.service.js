import http from '../http-common'
class CandidatureDataService {
  getAll(id) {
    return http.get(`/candidature/${id}`)
  }
  get(id) {
    return http.get(`/candidature/one/${id}`)
  }
  create(data) {
    return http.post('/candidature/', data)
  }
  update(id, data) {
    return http.put(`/candidature/${id}`, data)
  }
  delete(id) {
    return http.delete(`/candidature/${id}`)
  }
  deleteAll() {
    return http.delete(`/candidature`)
  }
  findByDate_insertion(date_insertion) {
    return http.get(`/candidature?date_insertion=${date_insertion}`)
  }
  validerCandidature(id) {
    return http.put(`/candidature/valider/${id}`)
  }
}
export default new CandidatureDataService()
