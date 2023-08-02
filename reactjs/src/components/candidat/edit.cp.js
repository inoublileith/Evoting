import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CandidatDataService from '../../services/candidat.service'
const EditCandidat = (props) => {
  let { id } = useParams()
  const initialCandidatState = {
    id: null,
    grade: '',
    ordre: '',
    niveau_etude: '',
    postes_occupees: '',
    realisation: '',
    cv: '',
  }
  const [currentCandidat, setCurrentCandidat] = useState(
    initialCandidatState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRandidat(this.props.match.params.id)
  // }
  const getCandidat = (id) => {
    CandidatDataService.get(id)
      .then((response) => {
        setCurrentCandidat(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCandidat(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCandidat({ ...currentCandidat, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentCandidat.id,
      grade: currentCandidat.grade,
      ordre: currentCandidat.ordre,
      niveau_etude: currentCandidat.niveau_etude,
      postes_occupees: currentCandidat.postes_occupees,
      realisation: currentCandidat.realisation,
      cv: currentCandidat.cv,
    }
    CandidatDataService.update(currentCandidat.id, data)
      .then((response) => {
        setCurrentCandidat({ ...currentCandidat, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateCandidat = () => {
    CandidatDataService.update(
      currentCandidat.id,
      currentCandidat
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Candidat was updated successfully!')
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
      {currentCandidat ? (
        <div className='edit-form'>
          <h4>Candidat</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='grade'>Grade</label>
              <input
                type='text'
                className='form-control'
                id='grade'
                value={currentCandidat.grade}
                onChange={handleInputChange}
                name='grade'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='ordre'>Ordre</label>
              <input
                type='text'
                className='form-control'
                id='ordre'
                value={currentCandidat.ordre}
                onChange={handleInputChange}
                name='ordre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='niveau_etude'>Niveau Etude</label>
              <input
                type='text'
                className='form-control'
                id='niveau_etude'
                required
                value={currentCandidat.niveau_etude}
                onChange={handleInputChange}
                name='niveau_etude'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='postes_occupees'>Postes Occupees</label>
              <input
                type='text'
                className='form-control'
                id='postes_occupees'
                required
                onChange={handleInputChange}
                value={currentCandidat.postes_occupees}
                name='postes_occupees'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='realisation'>Realisation</label>
              <input
                type='text'
                className='form-control'
                id='realisation'
                required
                value={currentCandidat.realisation}
                onChange={handleInputChange}
                name='realisation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cv'>CV</label>
              <input
                type='file'
                className='form-control'
                id='cv'
                required
                value={currentCandidat.cv}
                onChange={handleInputChange}
                name='cv'
              />
            </div>
            
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCandidat.etat === 1 ? 'Published' : 'Pending'}
            </div>
          </form>
          {currentCandidat.etat === 1 ? (
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
            onClick={updateCandidat}
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
export default EditCandidat
