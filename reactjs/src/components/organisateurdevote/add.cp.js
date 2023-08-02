import React, { useState } from 'react'
import OrganisateurdevoteDataService from '../../services/organisateurdevote.service'
const AddOrganisateurdevote = () => {
  const initialOrganisateurdevoteState = {
    id: null,
    fonction: '',
    grade: '',
    organisme: '',
    
  }
  const [organisateurdevote, setOrganisateurdevote] = useState(initialOrganisateurdevoteState)
  const [submitted, setSubmitted] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setOrganisateurdevote({ ...organisateurdevote, [name]: value })
  }
  const saveOrganisateurdevote = () => {
    var data = {
      fonction: organisateurdevote.fonction,
      grade: organisateurdevote.grade,
      organisme: organisateurdevote.organisme,
      
    }
    OrganisateurdevoteDataService.create(data)
      .then((response) => {
        setOrganisateurdevote({
          id: response.data.id,
          fonction: response.data.fonction,
          grade: response.data.grade,
          organisme: response.data.organisme,
          
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const newOrganisateurdevote = () => {
    setOrganisateurdevote(initialOrganisateurdevoteState)
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
                  onClick={newOrganisateurdevote}
                >
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='fonction'
                    class='input-group-text'
                    id='fonction'
                  >
                    Fonction
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fonction'
                    required
                    // value={this.state.titre}
                    value={organisateurdevote.fonction}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='fonction'
                    aria-describedby='fonction'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='grade' class='input-group-text' id='grade'>
                    Grade
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='grade'
                    required
                    onChange={handleInputChange}
                    name='grade'
                    aria-describedby='fonction'
                    value={organisateurdevote.grade}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='organisme'>Organisme</label>
                  <input
                    type='text'
                    className='form-control'
                    id='organisme'
                    required
                    value={organisateurdevote.organisme}
                    onChange={handleInputChange}
                    name='organisme'
                    placeholder='organisme'
                  />
                </div>

                <button
                  onClick={saveOrganisateurdevote}
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
export default AddOrganisateurdevote
