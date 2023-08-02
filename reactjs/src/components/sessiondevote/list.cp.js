import React, { useState, useEffect, useMemo, useRef } from 'react'
import SessiondevoteDataService from '../../services/sessiondevote.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import CandidatureDataService from '../../services/candidature.service'
import { useDispatch, useSelector } from 'react-redux'

const ShowSessiondevotes = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)

  const [showCandidatBoard, setShowCandidatBoard] = useState(false)
  const [
    showOrganisateurdevoteBoard,
    setShowOrganisateurdevoteBoard,
  ] = useState(false)

  const [sessiondevotes, setSessiondevotes] = useState([])
  const [searchRef, setSearchRef] = useState('')
  const sessiondevotesRef = useRef()
  sessiondevotesRef.current = sessiondevotes
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      setShowCandidatBoard(currentUser.roles.includes('ROLE_CANDIDAT'))
      setShowOrganisateurdevoteBoard(
        currentUser.roles.includes('ROLE_ORGANISATEURDEVOTE')
      )
    }
  }, [currentUser])

  useEffect(() => {
    if (showOrganisateurdevoteBoard) {
      retrieveSessiondevotes()
    }
  }, [showOrganisateurdevoteBoard])

  const onChangeSearchRef = (e) => {
    const searchRef = e.target.value
    setSearchRef(searchRef)
  }

  const retrieveSessiondevotes = () => {
    SessiondevoteDataService.getAll()
      .then((response) => {
        console.log(response.data)
        setSessiondevotes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveSessiondevotes()
  }

  const removeAllSessiondevotes = () => {
    SessiondevoteDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByRef = () => {
    SessiondevoteDataService.findByRef(searchRef)
      .then((response) => {
        setSessiondevotes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteSessiondevote = (rowIndex) => {
    const id = sessiondevotesRef.current[rowIndex].id
    SessiondevoteDataService.delete(id)
      .then((response) => {
        navigate('/sessiondevotes')
        let newSessiondevotes = [...sessiondevotesRef.current]
        newSessiondevotes.splice(rowIndex, 1)
        setSessiondevotes(newSessiondevotes)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openSessiondevote = (rowIndex) => {
    const id = sessiondevotesRef.current[rowIndex].id
    navigate('/editSessiondevote/' + id)
  }
  const openCandidatures = (rowIndex) => {
    const id = sessiondevotesRef.current[rowIndex].id
    navigate('/candidatures/' + id)
  }
  const openStats = (rowIndex) => {
    const id = sessiondevotesRef.current[rowIndex].id
    navigate('/stats/' + id)
  }
  const postulerCandidatures = (rowIndex) => {
    const id = sessiondevotesRef.current[rowIndex].id
    const iduser = currentUser.id
    var data = {
      etat: 0,
      iduser: iduser,
      idsession: id,
    }
    CandidatureDataService.create(data)
      .then((response) => {
        console.log(response.data)
        navigate('/candidatures/' + id)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Libelle',
        accessor: 'libelle',
      },
      {
        Header: 'Date debut election',
        accessor: 'date_debut_election',
      },
      {
        Header: 'Date fin election',
        accessor: 'date_fin_election',
      },
      {
        Header: 'Procedure electoral',
        accessor: 'procedure_electoral',
      },

      {
        Header: 'Date debut publicite',
        accessor: 'date_debut_publicite',
      },
      {
        Header: 'Date debut session',
        accessor: 'date_debut_session',
      },
      {
        Header: 'Date fin session',
        accessor: 'date_fin_session',
      },

      {
        Header: 'Reference',
        accessor: 'reference',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              {currentUser.profil == 4 && (
                <>
                  <button
                    onClick={() => openSessiondevote(rowIdx)}
                    className='m-3 btn btn-sm btn-danger'
                  >
                    EDIT
                  </button>

                  <button
                    onClick={() => deleteSessiondevote(rowIdx)}
                    className='m-3 btn btn-sm btn-warning'
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => openCandidatures(rowIdx)}
                    className='m-3 btn btn-sm btn-success'
                  >
                    Candidatures
                  </button>
                  <button
                    onClick={() => openStats(rowIdx)}
                    className='m-3 btn btn-sm btn-primary'
                  >
                    Statistiques
                  </button>
                </>
              )}
              {currentUser.profil == 2 && (
                <button
                  onClick={() => postulerCandidatures(rowIdx)}
                  className='m-3 btn btn-sm btn-success'
                >
                  Postuler
                </button>
              )}
            </div>
          )
        },
      },
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: sessiondevotes,
  })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-8'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search by libelle'
                  value={searchRef}
                  onChange={onChangeSearchRef}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    onClick={findByRef}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-12 list'>
              <table
                className='table table-bordered border-warning'
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowSessiondevotes
