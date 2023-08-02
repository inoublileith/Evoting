import http from '../http-common'
class RecommandationDataService {
  getAll() {
    return http.get('/recommandation/')
  }
  get(id) {
    return http.get(`/recommandation/${id}`)
  }
  create(data) {
    return http.post('/recommandation', data)
  }
  update(id, data) {
    return http.put(`/recommandation/${id}`, data)
  }
  delete(id) {
    return http.delete(`/recommandation/${id}`)
  }
  deleteAll() {
    return http.delete(`/recommandation`)
  }
  findByTitre(titre) {
    return http.get(`/recommandation?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/recommandation/transition/${id}/${etat}`)
  }

}
export default new RecommandationDataService()
