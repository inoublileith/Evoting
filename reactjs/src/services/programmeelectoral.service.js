import http from '../http-common'
class ProgrammeelectoralDataService {
  getAll() {
    return http.get('/programmeelectoral/')
  }
  get(id) {
    return http.get(`/programmeelectoral/${id}`)
  }
  create(data) {
    return http.post('/programmeelectoral', data)
  }
  update(id, data) {
    return http.put(`/programmeelectoral/${id}`, data)
  }
  delete(id) {
    return http.delete(`/programmeelectoral/${id}`)
  }
  deleteAll() {
    return http.delete(`/programmeelectoral`)
  }
  findByTitre(titre) {
    return http.get(`/programmeelectoral?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/programmeelectoral/transition/${id}/${etat}`)
  }
}
export default new ProgrammeelectoralDataService()
