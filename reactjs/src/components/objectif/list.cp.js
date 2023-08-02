import React, { useState, useEffect, useMemo, useRef } from 'react'
import ObjectifDataService from '../../services/objectif.service'
import ProgrammeelectoralDataService from '../../services/programmeelectoral.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useParams } from 'react-router-dom'
const ShowObjectifs = (props) => {
  let { id } = useParams()
  const [objectifs, setObjectifs] = useState([])
  const [programme, setProgramme] = useState([])
  const [searchDomaine, setSearchDomaine] = useState('')
  const objectifsRef = useRef()
  objectifsRef.current = objectifs
  const navigate = useNavigate()

  useEffect(() => {
    retrieveObjectifs(id)
    retrieveProgramme(id)
  }, [id])

  const onChangeSearchDomaine = (e) => {
    const searchDomaine = e.target.value
    setSearchDomaine(searchDomaine)
  }

  const retrieveObjectifs = (id) => {
    ObjectifDataService.getAll(id)
      .then((response) => {
        setObjectifs(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const retrieveProgramme = (id) => {
    ProgrammeelectoralDataService.get(id)
      .then((response) => {
        setProgramme(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = (id) => {
    retrieveObjectifs(id)
  }

  const removeAllObjectifs = () => {
    ObjectifDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList(id)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByDomaine = () => {
    ObjectifDataService.findByDomaine(searchDomaine)
      .then((response) => {
        setObjectifs(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteObjectif = (rowIndex) => {
    const id = objectifsRef.current[rowIndex].id
    ObjectifDataService.delete(id)
      .then((response) => {
       window.location.reload(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openObjectif = (rowIndex) => {
    const id = objectifsRef.current[rowIndex].id
    navigate('/editObjectif/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Titre',
        accessor: 'titre',
      },
      {
        Header: 'Domaine',
        accessor: 'domaine',
      },
      {
        Header: 'Sous_domaine',
        accessor: 'sous_domaine',
      },
      {
        Header: 'Mission',
        accessor: 'mission',
      },
      {
        Header: 'Date_debut_objectif',
        accessor: 'date_debut_objectif',
      },
      {
        Header: 'Date_fin_objectif',
        accessor: 'date_fin_objectif',
      },
      {
        Header: 'Propositions',
        accessor: 'propositions',
      },
      {
        Header: 'Reformes_a_venir',
        accessor: 'reformes_a_venir',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openObjectif(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteObjectif(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
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
    data: objectifs,
  })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-8'>
              <h3>{programme.titre}</h3>
            </div>
            <div className='col-md-8'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search by domaine'
                  value={searchDomaine}
                  onChange={onChangeSearchDomaine}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    onClick={findByDomaine}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <button
                className='m-3 btn btn-sm btn-danger'
                onClick={removeAllObjectifs}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link to={'/addObjectif/' + id} className='m-3 btn btn-sm btn-primary'>
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
export default ShowObjectifs
