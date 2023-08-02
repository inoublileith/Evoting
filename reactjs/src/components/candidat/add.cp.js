import React, { useState } from 'react'
import CandidatDataService from '../../services/candidat.service'
const AddCandidat = () => {
  const initialCandidatState = {
    id: null,
    grade: '',
    ordre: '',
    niveau_etude: '',
    postes_occupees: '',
    realisation: '',
    cv: '',
    
  }
  const [candidat, setCandidat] = useState(
    initialCandidatState
  )
  const [submitted, setSubmitted] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCandidat({ ...candidat, [name]: value })
  }
  const saveCandidat = () => {
    var data = {
      grade: candidat.grade,
      ordre: candidat.ordre,
      niveau_etude: candidat.niveau_etude,
      postes_occupees: candidat.postes_occupees,
      realisation: candidat.realisation,
      cv: candidat.cv,
      
    }
    CandidatDataService.create(data)
      .then((response) => {
        setCandidat({
          id: response.data.id,
          grade: response.data.grade,
          ordre: response.data.ordre,
          niveau_etude: response.data.niveau_etude,
          postes_occupees: response.data.postes_occupees,
          realisation: response.data.realisation,
          cv: response.data.cv,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const newCandidat = () => {
    setCandidat(initialCandidatState)
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
                <button className='btn btn-success' onClick={newCandidat}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label htmlFor='grade' class='input-group-text' id='grade'>
                    Grade
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='grade'
                    required
                    // value={this.state.titre}
                    value={candidat.grade}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='grade'
                    aria-describedby='grade'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='ordre' class='input-group-text' id='ordre'>
                    Ordre
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='ordre'
                    required
                    onChange={handleInputChange}
                    name='ordre'
                    aria-describedby='grade'
                    value={candidat.ordre}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='niveau_etude'>Niveau Etude</label>
                  <input
                    type='text'
                    className='form-control'
                    id='niveau_etude'
                    required
                    value={candidat.niveau_etude}
                    onChange={handleInputChange}
                    name='niveau_etude'
                    placeholder='niveau_etude'
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
                    value={candidat.postes_occupees}
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
                    value={candidat.realisation}
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
                    value={candidat.cv}
                    onChange={handleInputChange}
                    name='cv'
                  />
                </div>

                <button onClick={saveCandidat} className='btn btn-success'>
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
export default AddCandidat
