import React, { useState } from 'react'
import ObjectifDataService from '../../services/objectif.service'
import { useParams } from 'react-router-dom'

const AddObjectif = () => {
  let { id } = useParams()

  const initialObjectifState = {
    id: null,
    titre: '',
    domaine: '',
    sous_domaine: '',
    mission: '',
    date_debut_objectif: '2022-01-01',
    date_fin_objectif: '2022-01-01',
    propositions: '',
    reformes_a_venir: '',
    idprogramme: 0,
  }
  const [objectif, setObjectif] = useState(initialObjectifState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setObjectif({ ...objectif, [name]: value, idprogramme: id })
  }

  const saveObjectif = () => {
    var data = {
      titre: objectif.titre,
      domaine: objectif.domaine,
      sous_domaine: objectif.sous_domaine,
      mission: objectif.mission,
      date_debut_objectif: objectif.date_debut_objectif,
      date_fin_objectif: objectif.date_fin_objectif,
      propositions: objectif.propositions,
      reformes_a_venir: objectif.reformes_a_venir,
      idprogramme: objectif.idprogramme,
    }
    console.log(data)
    ObjectifDataService.create(data)
      .then((response) => {
        setObjectif({
          id: response.data.id,
          titre: response.data.titre,
          domaine: response.data.domaine,
          sous_domaine: response.data.sous_domaine,
          mission: response.data.mission,
          date_debut_objectif: response.data.date_debut_objectif,
          date_fin_objectif: response.data.date_fin_objectif,
          propositions: response.data.propositions,
          reformes_a_venir: response.data.reformes_a_venir,
          idprogramme: response.data.idprogramme,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newObjectif = () => {
    setObjectif(initialObjectifState)
    setSubmitted(false)
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='submit-form'>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className='btn btn-success' onClick={newObjectif}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label htmlFor='titre' class='input-group-text' id='titre'>
                    Titre
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='titre'
                    required
                    value={objectif.titre}
                    onChange={handleInputChange}
                    name='titre'
                    aria-describedby='titre'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='domaine'
                    class='input-group-text'
                    id='domaine'
                  >
                    Domaine
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='domaine'
                    required
                    value={objectif.domaine}
                    onChange={handleInputChange}
                    name='domaine'
                    aria-describedby='domaine'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='sous_domaine'
                    class='input-group-text'
                    id='sous_domaine'
                  >
                    Sous domaine
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='sous_domaine'
                    required
                    onChange={handleInputChange}
                    name='sous_domaine'
                    aria-describedby='domaine'
                    value={objectif.sous_domaine}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='mission'>Mission</label>
                  <input
                    type='text'
                    className='form-control'
                    id='mission'
                    required
                    value={objectif.mission}
                    onChange={handleInputChange}
                    name='mission'
                    placeholder='mission'
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
                    onChange={handleInputChange}
                    value={objectif.date_debut_objectif}
                    name='date_debut_objectif'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_fin_objectif'>Date fin objectif</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_debut_objectif'
                    required
                    value={objectif.date_debut_objectif}
                    onChange={handleInputChange}
                    name='date_debut_objectif'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='propositions'>Propositions</label>
                  <input
                    type='text'
                    className='form-control'
                    id='propositions'
                    required
                    value={objectif.propositions}
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
                    value={objectif.reformes_a_venir}
                    onChange={handleInputChange}
                    name='reformes_a_venir'
                  />
                </div>
                <button onClick={saveObjectif} className='btn btn-success'>
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
export default AddObjectif
