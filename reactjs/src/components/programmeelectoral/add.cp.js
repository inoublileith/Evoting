import React, { useState } from 'react'
import ProgrammeelectoralDataService from '../../services/programmeelectoral.service'
const AddProgrammeelectoral = () => {
  const initialProgrammeelectoralState = {
    id: null,
    titre: '',
    symbole_electoral: '',
    date_debut_programme: '2022-01-01',
    date_fin_programme: '2022-01-01',
    objectif_global: '',
    introduction: '',
    etat: 0,
    date_insertion: '2022-01-01',
  }
  const [programmeelectoral, setProgrammeelectoral] = useState(
    initialProgrammeelectoralState
  )
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProgrammeelectoral({ ...programmeelectoral, [name]: value })
  }

  const saveProgrammeelectoral = () => {
    var data = {
      titre: programmeelectoral.titre,
      symbole_electoral: programmeelectoral.symbole_electoral,
      date_debut_programme: programmeelectoral.date_debut_programme,
      date_fin_programme: programmeelectoral.date_fin_programme,
      objectif_global: programmeelectoral.objectif_global,
      introduction: programmeelectoral.introduction,
      etat: programmeelectoral.etat,
      date_insertion: programmeelectoral.date_insertion,
    }
    ProgrammeelectoralDataService.create(data)
      .then((response) => {
        setProgrammeelectoral({
          id: response.data.id,
          titre: response.data.titre,
          symbole_electoral: response.data.symbole_electoral,
          date_debut_programme: response.data.date_debut_programme,
          date_fin_programme: response.data.date_fin_programme,
          objectif_global: response.data.objectif_global,
          introduction: response.data.introduction,
          etat: response.data.etat,
          date_insertion: response.data.date_insertion,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }


  const newProgrammeelectoral = () => {
    setProgrammeelectoral(initialProgrammeelectoralState)
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
                <button
                  className='btn btn-success'
                  onClick={newProgrammeelectoral}
                >
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
                    // value={this.state.titre}
                    value={programmeelectoral.titre}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='titre'
                    aria-describedby='titre'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='symbole_electoral'
                    class='input-group-text'
                    id='symbole_electoral'
                  >
                    Symbole electoral
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='symbole_electoral'
                    required
                    onChange={handleInputChange}
                    name='symbole_electoral'
                    aria-describedby='titre'
                    value={programmeelectoral.symbole_electoral}
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
                    value={programmeelectoral.date_debut_programme}
                    onChange={handleInputChange}
                    name='date_debut_programme'
                    placeholder='date_debut_programme'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_fin_programme'>Date fin programme</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_fin_programme'
                    required
                    onChange={handleInputChange}
                    value={programmeelectoral.date_fin_programme}
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
                    value={programmeelectoral.objectif_global}
                    onChange={handleInputChange}
                    name='objectif_global'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='introduction'> Introduction</label>
                  <input
                    type='text'
                    className='form-control'
                    id='introduction'
                    required
                    value={programmeelectoral.introduction}
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
                    value={programmeelectoral.etat}
                    onChange={handleInputChange}
                    name='etat'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='date_insertion'>Date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_insertion'
                    required
                    value={programmeelectoral.date_insertion}
                    onChange={handleInputChange}
                    name='date_insertion'
                  />
                </div>
                <button
                  onClick={saveProgrammeelectoral}
                  className='btn btn-success'
                >
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
export default AddProgrammeelectoral
