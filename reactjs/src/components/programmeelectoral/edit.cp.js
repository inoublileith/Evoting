import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProgrammeelectoralDataService from '../../services/programmeelectoral.service'
const EditProgrammeelectoral = (props) => {
  let { id } = useParams()
  const initialProgrammeelectoralState = {
    id: null,
    titre: '',
    symbole_electoral: '',
    date_debut_programme: '2022-01-01',
    date_fin_programme: '2022-01-01',
    objectif_global: '',
    introduction:'',
    etat: 0,
    date_insertion: '2022-01-01',
  }
  const [currentProgrammeelectoral, setCurrentProgrammeelectoral] = useState(
    initialProgrammeelectoralState
  )
  const [message, setMessage] = useState('')
  const getProgrammeelectoral = (id) => {
    ProgrammeelectoralDataService.get(id)
      .then((response) => {
        setCurrentProgrammeelectoral(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getProgrammeelectoral(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentProgrammeelectoral({ ...currentProgrammeelectoral, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentProgrammeelectoral.id,
      titre: currentProgrammeelectoral.titre,
      symbole_electoral: currentProgrammeelectoral.symbole_electoral,
      date_debut_programme: currentProgrammeelectoral.date_debut_programme,
      date_fin_programme: currentProgrammeelectoral.date_fin_programme,
      objectif_global: currentProgrammeelectoral.objectif_global,
      introduction: currentProgrammeelectoral.introduction,
      etat: status,
      date_insertion: currentProgrammeelectoral.date_insertion,
    }
    ProgrammeelectoralDataService.update(currentProgrammeelectoral.id, data)
      .then((response) => {
        setCurrentProgrammeelectoral({ ...currentProgrammeelectoral, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateProgrammeelectoral = () => {
    ProgrammeelectoralDataService.update(
      currentProgrammeelectoral.id,
      currentProgrammeelectoral
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Programmeelectoral was updated successfully!')
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
            {currentProgrammeelectoral ? (
              <div className='edit-form'>
                <h4>Programme electoral</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='titre'>Titre</label>
                    <input
                      type='text'
                      className='form-control'
                      id='titre'
                      value={currentProgrammeelectoral.titre}
                      onChange={handleInputChange}
                      name='titre'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='symbole_electoral'>Symbole electoral</label>
                    <input
                      type='text'
                      className='form-control'
                      id='symbole_electoral'
                      value={currentProgrammeelectoral.symbole_electoral}
                      onChange={handleInputChange}
                      name='symbole_electoral'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_debut_programme'>
                      Date debut programme
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_debut_programme'
                      required
                      value={currentProgrammeelectoral.date_debut_programme}
                      onChange={handleInputChange}
                      name='date_debut_programme'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_fin_programme'>
                      Date fin programme
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_fin_programme'
                      required
                      onChange={handleInputChange}
                      value={currentProgrammeelectoral.date_fin_programme}
                      name='date_fin_programme'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='objectif_global'>Objectif global</label>
                    <input
                      type='text'
                      className='form-control'
                      id='objectif_global'
                      required
                      value={currentProgrammeelectoral.objectif_global}
                      onChange={handleInputChange}
                      name='objectif_global'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='introduction'>Introduction</label>
                    <input
                      type='text'
                      className='form-control'
                      id='introduction'
                      required
                      value={currentProgrammeelectoral.introduction}
                      onChange={handleInputChange}
                      name='introduction'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='etat'>Etat</label>
                    <input
                      type='text'
                      className='form-control'
                      id='etat'
                      required
                      value={currentProgrammeelectoral.etat}
                      onChange={handleInputChange}
                      name='etat'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_insertion'>Date</label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_ins'
                      required
                      value={currentProgrammeelectoral.date_insertion}
                      onChange={handleInputChange}
                      name='date_insertion'
                    />
                  </div>
                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentProgrammeelectoral.etat === 1
                      ? 'Published'
                      : 'Pending'}
                  </div>
                </form>
                {currentProgrammeelectoral.etat === 1 ? (
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
                  onClick={updateProgrammeelectoral}
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
export default EditProgrammeelectoral
