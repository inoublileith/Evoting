import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CandidatureDataService from '../../services/candidature.service'
const EditCandidature = (props) => {
  let { id } = useParams()
  const initialCandidatureState = {
    id: null,
    date_insertion: '2022-01-01',
    etat: 0,
    
  }
  const [currentCandidature, setCurrentCandidature] = useState(initialCandidatureState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRandidature(this.props.match.params.id)
  // }
  const getCandidature = (id) => {
    CandidatureDataService.get(id)
      .then((response) => {
        setCurrentCandidature(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCandidature(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCandidature({ ...currentCandidature, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentCandidature.id,
      date_insertion: currentCandidature.date_insertion,
      etat: currentCandidature.etat,
      
    }
    CandidatureDataService.update(currentCandidature.id, data)
      .then((response) => {
        setCurrentCandidature({ ...currentCandidature, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateCandidature = () => {
    CandidatureDataService.update(currentCandidature.id, currentCandidature)
      .then((response) => {
        console.log(response.data)
        setMessage('The Candidature was updated successfully!')
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
            {currentCandidature ? (
              <div className='edit-form'>
                <h4>Candidature</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='date_insertion'>date_insertion</label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_insertion'
                      value={currentCandidature.date_insertion}
                      onChange={handleInputChange}
                      name='date_insertion'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>etat</label>
                    <input
                      type='number'
                      className='form-control'
                      id='etat'
                      value={currentCandidature.etat}
                      onChange={handleInputChange}
                      name='etat'
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentCandidature.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentCandidature.etat === 1 ? (
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
                  onClick={updateCandidature}
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
export default EditCandidature
