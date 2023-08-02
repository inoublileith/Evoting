import React, { useState, useEffect, useMemo, useRef } from 'react'
import CandidatDataService from '../../services/candidat.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowCandidats = (props) => {
  const [candidats, setCandidats] = useState([])
  const [searchGrade, setSearchGrade] = useState('')
  const candidatsRef = useRef()
  candidatsRef.current = candidats
  const navigate = useNavigate()

  useEffect(() => {
    retrieveCandidats()
  }, [])

  const onChangeSearchGrade = (e) => {
    const searchGrade = e.target.value
    setSearchGrade(searchGrade)
  }

  const retrieveCandidats = () => {
    CandidatDataService.getAll()
      .then((response) => {
        setCandidats(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveCandidats()
  }

  const removeAllCandidats = () => {
    CandidatDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByGrade = () => {
    CandidatDataService.findByGrade(searchGrade)
      .then((response) => {
        setCandidats(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteCandidat = (rowIndex) => {
    const id = candidatsRef.current[rowIndex].id
    CandidatDataService.delete(id)
      .then((response) => {
        navigate('/candidats')
        let newCandidats = [...candidatsRef.current]
        newCandidats.splice(rowIndex, 1)
        setCandidats(newCandidats)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openCandidat = (rowIndex) => {
    const id = candidatsRef.current[rowIndex].id
    navigate('/editCandidat/' + id)
  }

   const autoriserUser = (rowIndex) => {
    const id = candidatsRef.current[rowIndex].id
     CandidatDataService.autoriserUser(id)
       .then(() => {
         retrieveCandidats()
       })
       .catch((e) => {
         console.log(e)
       })
   }

   const bloquerUser = (rowIndex) => {
    const id = candidatsRef.current[rowIndex].id
     console.log(id)
     CandidatDataService.bloquerUser(id)
       .then(() => {
         retrieveCandidats()
       })
       .catch((e) => {
         console.log(e)
       })
   }


  const columns = useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prénom',
        accessor: 'prenom',
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'CIN',
        accessor: 'cin',
      },
      {
        Header: 'Grade',
        accessor: 'grade',
      },
      {
        Header: 'Ordre',
        accessor: 'ordre',
      },
      {
        Header: 'Niveau etude',
        accessor: 'niveau_etude',
      },
      {
        Header: 'Postes occupees',
        accessor: 'postes_occupees',
      },
      {
        Header: 'Realisation',
        accessor: 'realisation',
      },
      // {
      //   Header: 'Cv',
      //   accessor: 'cv',
      // },
      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value === 0 ? 'Bloqué' : 'Autorisé'
        },
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => autoriserUser(rowIdx)}
                className='m-3 btn btn-sm btn-success'
              >
                AUTORISER
              </button>

              <button
                onClick={() => bloquerUser(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                BLOQUER
              </button>

              <button
                onClick={() => deleteCandidat(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                DELETE
              </button>
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
    data: candidats,
  })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
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
export default ShowCandidats
