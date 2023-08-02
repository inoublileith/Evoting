import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ObjectifDataService from '../../services/objectif.service'
const EditObjectif = (props) => {
  let { id } = useParams()
  const initialObjectifState = {
    id: null,
    domaine: '',
    sous_domaine: '',
    mission: '',
    date_debut_objectif: '2022-01-01',
    date_fin_objectif: '2022-01-01',
    propositions: '',
    reformes_a_venir: '',
  }
  const [currentObjectif, setCurrentObjectif] = useState(
    initialObjectifState
  )
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRbjectif(this.props.match.params.id)
  // }
  const getObjectif = (id) => {
    ObjectifDataService.get(id)
      .then((response) => {
        setCurrentObjectif(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getObjectif(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentObjectif({ ...currentObjectif, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentObjectif.id,
      domaine: currentObjectif.domaine,
      sous_domaine: currentObjectif.sous_domaine,
      mission: currentObjectif.mission,
      date_debut_objectif: currentObjectif.date_debut_objectif,
      date_fin_objectif: currentObjectif.date_fin_objectif,
      propositions: currentObjectif.propositions,
      reformes_a_venir: currentObjectif.reformes_a_venir,
    }
    ObjectifDataService.update(currentObjectif.id, data)
      .then((response) => {
        setCurrentObjectif({ ...currentObjectif, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateObjectif = () => {
    ObjectifDataService.update(
      currentObjectif.id,
      currentObjectif
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Objectif was updated successfully!')
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
            {currentObjectif ? (
              <div className='edit-form'>
                <h4>Objectif</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='domaine'>Domaine</label>
                    <input
                      type='text'
                      className='form-control'
                      id='domaine'
                      value={currentObjectif.domaine}
                      onChange={handleInputChange}
                      name='domaine'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='sous_domaine'>Sous domaine</label>
                    <input
                      type='text'
                      className='form-control'
                      id='sous_domaine'
                      value={currentObjectif.sous_domaine}
                      onChange={handleInputChange}
                      name='sous_domaine'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='mission'>Mission</label>
                    <input
                      type='text'
                      className='form-control'
                      id='mission'
                      required
                      value={currentObjectif.mission}
                      onChange={handleInputChange}
                      name='mission'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_debut_objectif'>
                      Date debut objectif
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_debut_objectif'
                      required
                      value={currentObjectif.date_debut_objectif}
                      onChange={handleInputChange}
                      name='date_debut_objectif'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date_fin_objectif'>Date fin objectif</label>
                    <input
                      type='date'
                      className='form-control'
                      id='date_fin_objectif'
                      required
                      onChange={handleInputChange}
                      value={currentObjectif.date_fin_objectif}
                      name='date_fin_objectif'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='propositions'>Propositions</label>
                    <input
                      type='text'
                      className='form-control'
                      id='propositions'
                      required
                      value={currentObjectif.propositions}
                      onChange={handleInputChange}
                      name='propositions'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='reformes_a_venir'>Reformes a venir</label>
                    <input
                      type='text'
                      className='form-control'
                      id='reformes_a_venir'
                      required
                      value={currentObjectif.reformes_a_venir}
                      onChange={handleInputChange}
                      name='reformes_a_venir'
                    />
                  </div>
                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentObjectif.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentObjectif.etat === 1 ? (
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
                  onClick={updateObjectif}
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
export default EditObjectif
