import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoiDataService from '../../services/loi.service'
const EditLoi = (props) => {
  let { id } = useParams()
  const initialLoiState = {
    id: null,
    type: '',
    regles: '',
    condition_electeur: '',
    condition_candidat: '',
    
  }
  const [currentLoi, setCurrentLoi] = useState(
    initialLoiState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRoi(this.props.match.params.id)
  // }
  const getLoi = (id) => {
    LoiDataService.get(id)
      .then((response) => {
        setCurrentLoi(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getLoi(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentLoi({ ...currentLoi, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentLoi.id,
      type: currentLoi.type,
      regles: currentLoi.regles,
      condition_electeur: currentLoi.condition_electeur,
      condition_candidat: currentLoi.condition_candidat,
     
    }
    LoiDataService.update(currentLoi.id, data)
      .then((response) => {
        setCurrentLoi({ ...currentLoi, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateLoi = () => {
    LoiDataService.update(
      currentLoi.id,
      currentLoi
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Loi was updated successfully!')
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
            {currentLoi ? (
              <div className='edit-form'>
                <h4>Loi</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='type'>Type</label>
                    <input
                      type='text'
                      className='form-control'
                      id='type'
                      value={currentLoi.type}
                      onChange={handleInputChange}
                      name='type'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='regles'>Regles</label>
                    <input
                      type='text'
                      className='form-control'
                      id='regles'
                      value={currentLoi.regles}
                      onChange={handleInputChange}
                      name='regles'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='condition_electeur'>
                      Condition electeur
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='condition_electeur'
                      required
                      value={currentLoi.condition_electeur}
                      onChange={handleInputChange}
                      name='condition_electeur'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='condition_candidat'>
                      Condition candidat
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='condition_candidat'
                      required
                      onChange={handleInputChange}
                      value={currentLoi.condition_candidat}
                      name='condition_candidat'
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentLoi.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentLoi.etat === 1 ? (
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
                  onClick={updateLoi}
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
export default EditLoi
