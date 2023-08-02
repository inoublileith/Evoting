import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MembreDataService from '../../services/membre.service'
const EditMembre = (props) => {
  let { id } = useParams()
  const initialMembreState = {
    id: null,
    profession: '',
    poste_occupee: '',
    cv: '',
  }
  const [currentMembre, setCurrentMembre] = useState(initialMembreState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRembre(this.props.match.params.id)
  // }
  const getMembre = (id) => {
    MembreDataService.get(id)
      .then((response) => {
        setCurrentMembre(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getMembre(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentMembre({ ...currentMembre, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentMembre.id,
      profession: currentMembre.profession,
      poste_occupee: currentMembre.poste_occupee,
      cv: currentMembre.cv,
    }
    MembreDataService.update(currentMembre.id, data)
      .then((response) => {
        setCurrentMembre({ ...currentMembre, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateMembre = () => {
    MembreDataService.update(currentMembre.id, currentMembre)
      .then((response) => {
        console.log(response.data)
        setMessage('The Membre was updated successfully!')
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
            {currentMembre ? (
              <div className='edit-form'>
                <h4>Membre</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='profession'>Profession</label>
                    <input
                      type='text'
                      className='form-control'
                      id='profession'
                      value={currentMembre.profession}
                      onChange={handleInputChange}
                      name='profession'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='poste_occupee'>Poste occupée</label>
                    <input
                      type='text'
                      className='form-control'
                      id='poste_occupee'
                      value={currentMembre.poste_occupee}
                      onChange={handleInputChange}
                      name='poste_occupee'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='cv'>CV</label>
                    <input
                      type='file'
                      className='form-control'
                      id='cv'
                      required
                      value={currentMembre.cv}
                      onChange={handleInputChange}
                      name='cv'
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentMembre.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentMembre.etat === 1 ? (
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
                  onClick={updateMembre}
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
export default EditMembre
