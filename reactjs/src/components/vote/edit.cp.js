import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VoteDataService from '../../services/vote.service'
const EditVote = (props) => {
  let { id } = useParams()
  const initialVoteState = {
    id: null,
    date: '2022-01-01',
    
  }
  const [currentVote, setCurrentVote] = useState(
    initialVoteState
  )
  const [message, setMessage] = useState('')
  const getVote = (id) => {
    VoteDataService.get(id)
      .then((response) => {
        setCurrentVote(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getVote(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentVote({ ...currentVote, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentVote.id,
      date: currentVote.date,
      
    }
    VoteDataService.update(currentVote.id, data)
      .then((response) => {
        setCurrentVote({ ...currentVote })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateVote = () => {
    VoteDataService.update(
      currentVote.id,
      currentVote
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Vote was updated successfully!')
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
            {currentVote ? (
              <div className='edit-form'>
                <h4>Vote</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input
                      type='text'
                      className='form-control'
                      id='date'
                      value={currentVote.date}
                      onChange={handleInputChange}
                      name='date'
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentVote.etat === 1 ? 'Published' : 'Pending'}
                  </div>
                </form>
                {currentVote.etat === 1 ? (
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
                  onClick={updateVote}
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
export default EditVote
