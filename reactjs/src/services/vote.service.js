import http from '../http-common'
class VoteDataService {
  getAll() {
    return http.get('/vote/')
  }
  get(id) {
    return http.get(`/vote/${id}`)
  }
  create(data) {
    return http.post('/vote', data)
  }
  update(id, data) {
    return http.put(`/vote/${id}`, data)
  }
  delete(id) {
    return http.delete(`/vote/${id}`)
  }
  deleteAll() {
    return http.delete(`/vote`)
  }
  findByDate(date) {
    return http.get(`/vote?date=${date}`)
  }
  transition(id, etat) {
    return http.put(`/vote/transition/${id}/${etat}`)
  }
}
export default new VoteDataService()
