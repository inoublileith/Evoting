import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SessiondevoteDataService from '../../services/sessiondevote.service'
const EditSessiondevote = (props) => {
  let { id } = useParams()
  const initialSessiondevoteState = {
    id: null,
    libelle: '',
    date_debut_election: '2022-01-01',
    date_fin_election: '2022-01-01',
    procedure_electoral: '',
    date_debut_publicite: '2022-01-01',
    date_fin_publicite: '2022-01-01',
    date_debut_session: '2022-01-01',
    date_fin_session: '2022-01-01',
    reference: '',
  }
  const [currentSessiondevote, setCurrentSessiondevote] = useState(
    initialSessiondevoteState
  )
  const [message, setMessage] = useState('')
  const getSessiondevote = (id) => {
    SessiondevoteDataService.get(id)
      .then((response) => {
        setCurrentSessiondevote(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getSessiondevote(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentSessiondevote({ ...currentSessiondevote, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentSessiondevote.id,
      libelle: currentSessiondevote.libelle,
      date_debut_election: currentSessiondevote.date_debut_election,
      date_fin_election: currentSessiondevote.date_fin_election,
      procedure_electoral: currentSessiondevote.procedure_electoral,
      date_debut_publicite: currentSessiondevote.date_debut_publicite,

      date_fin_publicite: currentSessiondevote.date_fin_publicite,
      date_debut_session: currentSessiondevote.date_debut_session,
      date_fin_session: currentSessiondevote.date_fin_session,
      reference: currentSessiondevote.reference,
    }
    SessiondevoteDataService.update(currentSessiondevote.id, data)
      .then((response) => {
        setCurrentSessiondevote({ ...currentSessiondevote })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateSessiondevote = () => {
    SessiondevoteDataService.update(
      currentSessiondevote.id,
      currentSessiondevote
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Sessiondevote was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div>
            {currentSessiondevote ? (
              <div className='edit-form'>
                <h4>Session de vote</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='libelle'>Libelle</label>
                    <input
                      type='text'
                      className='form-control'
                      id='libelle'
                      value={currentSessiondevote.libelle}
                      onChange={handleInputChange}
                      name='libelle'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_debut_election'>
                      date debut election
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='date_debut_election'
                      value={currentSessiondevote.date_debut_election}
                      onChange={handleInputChange}
                      name='date_debut_election'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_fin_election'>date fin election</label>
                    <input
                      type='text'
                      className='form-control'
                      id='date_fin_election'
                      required
                      value={currentSessiondevote.date_fin_election}
                      onChange={handleInputChange}
                      name='date_fin_election'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='procedure_electoral'>
                      procedure electoral
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='procedure_electoral'
                      required
                      onChange={handleInputChange}
                      value={currentSessiondevote.procedure_electoral}
                      name='procedure_electoral'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_debut_publicite'>
                      date debut publicite
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='date_debut_publicite'
                      required
                      value={currentSessiondevote.date_debut_publicite}
                      onChange={handleInputChange}
                      name='date_debut_publicite'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_fin_publicite'>
                      date fin publicite
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='date_fin_publicite'
                      required
                      value={currentSessiondevote.date_fin_publicite}
                      onChange={handleInputChange}
                      name='date_fin_publicite'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_debut_session'>
                      date debut session
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_debut_session'
                      required
                      value={currentSessiondevote.date_debut_session}
                      onChange={handleInputChange}
                      name='date_debut_session'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='date_fin_session'>date fin session</label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_fin_session'
                      required
                      value={currentSessiondevote.date_fin_session}
                      onChange={handleInputChange}
                      name='date_fin_session'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='reference'>reference</label>
                    <input
                      type='reference'
                      className='form-control'
                      id='reference'
                      required
                      value={currentSessiondevote.reference}
                      onChange={handleInputChange}
                      name='reference'
                    />
                  </div>
                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentSessiondevote.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentSessiondevote.etat === 1 ? (
                  <button
                    className='m-3 btn btn-sm btn-danger'
                    onClick={() => updatePublished(0)}
                  >
                    UnPublish
                  </button>
                ) : (
                  <button
                    className='m-3 btn btn-sm btn-warning'
                    onClick={() => updatePublished(1)}
                  >
                    Publish
                  </button>
                )}

                <button
                  type='submit'
                  className='m-3 btn btn-sm btn-success'
                  onClick={updateSessiondevote}
                >
                  Update
                </button>
                <p>{message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Tutorial...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditSessiondevote
