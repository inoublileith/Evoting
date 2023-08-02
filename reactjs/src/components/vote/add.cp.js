import React, { useState } from 'react'
import VoteDataService from '../../services/vote.service'
const AddVote = () => {
  const initialVoteState = {
    id: null,
    date: '2022-01-01',
   
  }
  const [vote, setVote] = useState(initialVoteState)
  const [submitted, setSubmitted] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setVote({ ...vote, [name]: value })
  }
  const saveVote = () => {
    var data = {
      date: vote.date,
      
    }
    VoteDataService.create(data)
      .then((response) => {
        setVote({
          id: response.data.id,
          date: response.data.date,
          
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const newVote = () => {
    setVote(initialVoteState)
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
                <button className='btn btn-success' onClick={newVote}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label htmlFor='date' class='input-group-text' id='date'>
                    Date
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='date'
                    required
                    // value={this.state.titre}
                    value={vote.date}
                    // onChange={this.onChangeTitre}
                    onChange={handleInputChange}
                    name='date'
                    aria-describedby='date'
                  />
                </div>

                <button onClick={saveVote} className='btn btn-success'>
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
export default AddVote
