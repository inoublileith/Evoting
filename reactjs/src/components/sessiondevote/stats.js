import React, { useState, useEffect, useMemo, useRef } from 'react'
import SessiondevoteDataService from '../../services/sessiondevote.service'

import { useTable } from 'react-table'
import { useParams } from 'react-router-dom'

const ShowCandidatures = (props) => {
  let { id } = useParams()
  const [candidatures, setCandidatures] = useState([])

  useEffect(() => {
    retrieveVotes(id)
  }, [id])

  const retrieveVotes = (id) => {
    SessiondevoteDataService.getStats(id)
      .then((response) => {
        setCandidatures(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-12 row'>
              {candidatures && (
                <>
                  {candidatures.map((c) => (
                    <>
                      <div className='col-xl-3 col-md-6'>
                        <div className='card card-h-100'>
                          <div className='card-body'>
                            <div className='row align-items-center'>
                              <div className='col-12'>
                                <span className='text-muted d-block'>
                                  <h4 className='mb-1'>• Nom du candidat:</h4>
                                  {c.nom} {c.prenom}
                                </span>
                                <h4 className='mt-3'>• Votes: {c.count}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowCandidatures
