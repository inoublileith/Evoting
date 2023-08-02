import React, { useState } from 'react'
import LoiDataService from '../../services/loi.service'
const AddLoi = () => {
  const initialLoiState = {
    id: null,
    type: '',
    regles: '',
    condition_electeur: '',
    condition_candidat: '',
  }
  const [loi, setLoi] = useState(initialLoiState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setLoi({ ...loi, [name]: value })
  }

  const saveLoi = () => {
    var data = {
      type: loi.type,
      regles: loi.regles,
      condition_electeur: loi.condition_electeur,
      condition_candidat: loi.condition_candidat,
    }
    LoiDataService.create(data)
      .then((response) => {
        setLoi({
          id: response.data.id,
          type: response.data.type,
          regles: response.data.regles,
          condition_electeur: response.data.condition_electeur,
          condition_candidat: response.data.condition_candidat,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newLoi = () => {
    setLoi(initialLoiState)
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
                <button className='btn btn-success' onClick={newLoi}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label htmlFor='type' class='input-group-text' id='type'>
                    Type
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='type'
                    required
                    value={loi.type}
                    onChange={handleInputChange}
                    name='type'
                    aria-describedby='type'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='regles' class='input-group-text' id='regles'>
                    Regles
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='regles'
                    required
                    onChange={handleInputChange}
                    name='regles'
                    aria-describedby='type'
                    value={loi.regles}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='condition_electeur'>Condition electeur</label>
                  <input
                    type='text'
                    className='form-control'
                    id='condition_electeur'
                    required
                    value={loi.condition_electeur}
                    onChange={handleInputChange}
                    name='condition_electeur'
                    placeholder='condition_electeur'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='condition_candidat'>Condition candidat</label>
                  <input
                    type='text'
                    className='form-control'
                    id='condition_candidat'
                    required
                    onChange={handleInputChange}
                    value={loi.condition_candidat}
                    name='condition_candidat'
                  />
                </div>

                <button onClick={saveLoi} className='btn btn-success'>
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
export default AddLoi
