import React, { useState, useEffect, useMemo, useRef } from 'react'
import ProgrammeelectoralDataService from '../../services/programmeelectoral.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowProgrammeelectorals = (props) => {
  const [programmeelectorals, setProgrammeelectorals] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const programmeelectoralsRef = useRef()
  programmeelectoralsRef.current = programmeelectorals
  const navigate = useNavigate()

  useEffect(() => {
    retrieveProgrammeelectorals()
  }, [])

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }

  const retrieveProgrammeelectorals = () => {
    ProgrammeelectoralDataService.getAll()
      .then((response) => {
        setProgrammeelectorals(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveProgrammeelectorals()
  }

  const removeAllProgrammeelectorals = () => {
    ProgrammeelectoralDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitre = () => {
    ProgrammeelectoralDataService.findByTitre(searchTitre)
      .then((response) => {
        setProgrammeelectorals(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteProgrammeelectoral = (rowIndex) => {
    const id = programmeelectoralsRef.current[rowIndex].id
    ProgrammeelectoralDataService.delete(id)
      .then((response) => {
        navigate('/programmeelectorals')
        let newProgrammeelectorals = [...programmeelectoralsRef.current]
        newProgrammeelectorals.splice(rowIndex, 1)
        setProgrammeelectorals(newProgrammeelectorals)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openProgrammeelectoral = (rowIndex) => {
    const id = programmeelectoralsRef.current[rowIndex].id
    navigate('/editProgrammeelectoral/' + id)
  }

  const openObjectifs = (rowIndex) => {
    const id = programmeelectoralsRef.current[rowIndex].id
    navigate('/objectifs/' + id)
  }
  const openMembres = (rowIndex) => {
    const id = programmeelectoralsRef.current[rowIndex].id
    navigate('/membres/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Titre',
        accessor: 'titre',
      },
      {
        Header: 'Symbole electoral',
        accessor: 'symbole_electoral',
      },
      {
        Header: 'Date debut programme',
        accessor: 'date_debut_programme',
      },
      {
        Header: 'Date fin programme',
        accessor: 'date_fin_programme',
      },
      {
        Header: 'Objectif global',
        accessor: 'objectif_global',
      },
      {
        Header: 'Introduction',
        accessor: 'introduction',
      },

      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value === 0 ? 'Private' : 'Public'
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
                onClick={() => openProgrammeelectoral(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteProgrammeelectoral(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                DELETE
              </button>
              <button
                onClick={() => openObjectifs(rowIdx)}
                className='m-3 btn btn-sm btn-success'
              >
                Objectifs
              </button>
              <button
                onClick={() => openMembres(rowIdx)}
                className='m-3 btn btn-sm btn-success'
              >
                Membres
              </button>
            </div>
          )
        },
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: programmeelectorals,
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
                  placeholder='Search by titre'
                  value={searchTitre}
                  // onChange={this.onChangeSearchTitre}
                  onChange={onChangeSearchTitre}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    // onClick={this.searchTitre}
                    onClick={findByTitre}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* <div className='col-md-6'> */}
            <div className='col-md-6'>
              <button
                className='m-3 btn btn-sm btn-danger'
                onClick={removeAllProgrammeelectorals}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link
                to={'/addProgrammeelectoral'}
                className='m-3 btn btn-sm btn-primary'
              >
                New
              </Link>
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
export default ShowProgrammeelectorals
