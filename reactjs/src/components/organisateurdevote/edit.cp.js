import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OrganisateurdevoteDataService from '../../services/organisateurdevote.service'
const EditOrganisateurdevote = (props) => {
  let { id } = useParams()
  const initialOrganisateurdevoteState = {
    id: null,
    fonction: '',
    grade: '',
    organisme: '',
    
  }
  const [currentOrganisateurdevote, setCurrentOrganisateurdevote] = useState(initialOrganisateurdevoteState)
  const [message, setMessage] = useState('')
  const getOrganisateurdevote = (id) => {
    OrganisateurdevoteDataService.get(id)
      .then((response) => {
        setCurrentOrganisateurdevote(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getOrganisateurdevote(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentOrganisateurdevote({ ...currentOrganisateurdevote, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentOrganisateurdevote.id,
      fonction: currentOrganisateurdevote.fonction,
      grade: currentOrganisateurdevote.grade,
      organisme: currentOrganisateurdevote.organisme,
      
    }
    OrganisateurdevoteDataService.update(currentOrganisateurdevote.id, data)
      .then((response) => {
        setCurrentOrganisateurdevote({ ...currentOrganisateurdevote, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateOrganisateurdevote = () => {
    OrganisateurdevoteDataService.update(currentOrganisateurdevote.id, currentOrganisateurdevote)
      .then((response) => {
        console.log(response.data)
        setMessage('The Organisateurdevote was updated successfully!')
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
            {currentOrganisateurdevote ? (
              <div className='edit-form'>
                <h4>Organisateur de vote</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='fonction'>Fonction</label>
                    <input
                      type='text'
                      className='form-control'
                      id='fonction'
                      value={currentOrganisateurdevote.fonction}
                      onChange={handleInputChange}
                      name='fonction'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='grade'>Grade</label>
                    <input
                      type='text'
                      className='form-control'
                      id='grade'
                      value={currentOrganisateurdevote.grade}
                      onChange={handleInputChange}
                      name='grade'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='organisme'>Organisme</label>
                    <input
                      type='text'
                      className='form-control'
                      id='organisme'
                      required
                      value={currentOrganisateurdevote.organisme}
                      onChange={handleInputChange}
                      name='organisme'
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentOrganisateurdevote.etat === 1
                      ? 'Published'
                      : 'Pending'}
                  </div>
                </form>
                {currentOrganisateurdevote.etat === 1 ? (
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
                  onClick={updateOrganisateurdevote}
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
export default EditOrganisateurdevote
