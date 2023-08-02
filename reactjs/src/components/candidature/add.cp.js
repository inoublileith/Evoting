import React, { useState } from 'react'
import CandidatureDataService from '../../services/candidature.service'
const AddCandidature = () => {
  const initialCandidatureState = {
    id: null,
    date_insertion: '2022-01-01',
    etat: 0,
  }
  const [candidature, setCandidature] = useState(initialCandidatureState)
  const [submitted, setSubmitted] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCandidature({ ...candidature, [name]: value })
  }
  const saveCandidature = () => {
    var data = {
      date_insertion: candidature.date_insertion,
      etat: candidature.etat,
    }
    CandidatureDataService.create(data)
      .then((response) => {
        setCandidature({
          id: response.data.id,
          date_insertion: response.data.date_insertion,
          etat: response.data.etat,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const newCandidature = () => {
    setCandidature(initialCandidatureState)
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
                <button className='btn btn-success' onClick={newCandidature}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='date_insertion'
                    class='input-group-text'
                    id='date_insertion'
                  >
                    date_insertion
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='date_insertion'
                    required
                    // value={this.state.titre}
                    value={candidature.date_insertion}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='date_insertion'
                    aria-describedby='date_insertion'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='etat' class='input-group-text' id='etat'>
                    etat
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='etat'
                    required
                    onChange={handleInputChange}
                    name='etat'
                    aria-describedby='date_insertion'
                    value={candidature.etat}
                  />
                </div>

                <button onClick={saveCandidature} className='btn btn-success'>
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
export default AddCandidature
