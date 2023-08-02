import React, { useState, useEffect } from 'react'
import SessiondevoteDataService from '../../services/sessiondevote.service'
const AddSessiondevote = () => {
  const initialSessiondevoteState = {
    id: null,
    libelle: '',
    date_debut_election: '',
    date_fin_election: '',
    procedure_electoral: '',
    date_debut_publicite: '',
    date_fin_publicite: '',
    date_debut_session: '',
    date_fin_session: '',
  }
  const [sessiondevote, setSessiondevote] = useState(initialSessiondevoteState)
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState(0)

  const min = 100
  const max = 10000

  useEffect(() => {
    randomRef(min, max)
  }, [submitted])

  const randomRef = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    setReference(rand)
    console.log('random value = ', reference)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSessiondevote({ ...sessiondevote, [name]: value })
  }

  const saveSessiondevote = () => {
    var data = {
      libelle: sessiondevote.libelle,
      date_debut_election: sessiondevote.date_debut_election,
      date_fin_election: sessiondevote.date_fin_election,
      procedure_electoral: sessiondevote.procedure_electoral,
      date_debut_publicite: sessiondevote.date_debut_publicite,
      date_fin_publicite: sessiondevote.date_fin_publicite,
      date_debut_session: sessiondevote.date_debut_session,
      date_fin_session: sessiondevote.date_fin_session,
      reference: sessiondevote.libelle.slice(0, 3) + reference,
    }
    SessiondevoteDataService.create(data)
      .then((response) => {
        setSessiondevote({
          id: response.data.id,
          libelle: response.data.libelle,
          date_debut_election: response.data.date_debut_election,
          date_fin_election: response.data.date_fin_election,
          procedure_electoral: response.data.procedure_electoral,
          date_debut_publicite: response.data.date_debut_publicite,
          date_fin_publicite: response.data.date_fin_publicite,
          date_debut_session: response.data.date_debut_session,
          date_fin_session: response.data.date_fin_session,
          reference: response.data.reference,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newSessiondevote = () => {
    setSessiondevote(initialSessiondevoteState)
    setSubmitted(false)
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='submit-form'>
            {/* {this.state.submitted ? ( */}
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className='btn btn-success' onClick={newSessiondevote}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='form-group'>
                  <label htmlFor='libelle' id='libelle'>
                    Libelle
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='libelle'
                    required
                    value={sessiondevote.libelle}
                    onChange={handleInputChange}
                    name='libelle'
                    aria-describedby='libelle'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='procedure_electoral'>
                    Procedure electoral
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='procedure_electoral'
                    required
                    onChange={handleInputChange}
                    value={sessiondevote.procedure_electoral}
                    name='procedure_electoral'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_debut_election' id='date_debut_election'>
                    Date debut election
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_debut_election'
                    required
                    onChange={handleInputChange}
                    name='date_debut_election'
                    aria-describedby='libelle'
                    value={sessiondevote.date_debut_election}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_fin_election'>Date fin election</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_fin_election'
                    required
                    value={sessiondevote.date_fin_election}
                    onChange={handleInputChange}
                    name='date_fin_election'
                    placeholder='date_fin_election'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='date_debut_publicite'>
                    Date debut publicite
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_debut_publicite'
                    required
                    value={sessiondevote.date_debut_publicite}
                    onChange={handleInputChange}
                    name='date_debut_publicite'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_fin_publicite'>Date fin publicite</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_fin_publicite'
                    required
                    value={sessiondevote.date_fin_publicite}
                    onChange={handleInputChange}
                    name='date_fin_publicite'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_debut_session'>Date debut session</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_debut_session'
                    required
                    value={sessiondevote.date_debut_session}
                    onChange={handleInputChange}
                    name='date_debut_session'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='date_fin_session'>Date fin session</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_fin_session'
                    required
                    value={sessiondevote.date_fin_session}
                    onChange={handleInputChange}
                    name='date_fin_session'
                  />
                </div>

                <button onClick={saveSessiondevote} className='btn btn-success'>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddSessiondevote
