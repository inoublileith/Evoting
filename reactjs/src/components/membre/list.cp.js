import React, { useState, useEffect, useMemo, useRef } from 'react'
import MembreDataService from '../../services/membre.service'
import ProgrammeelectoralDataService from '../../services/programmeelectoral.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useParams } from 'react-router-dom'

const ShowMembres = (props) => {
  let { id } = useParams()

  const [programme, setProgramme] = useState([])
  const [membres, setMembres] = useState([])
  const [searchProfession, setSearchProfession] = useState('')
  const membresRef = useRef()
  membresRef.current = membres
  const navigate = useNavigate()

  useEffect(() => {
    retrieveMembres()
    retrieveProgramme(id)
  }, [])

  const onChangeSearchProfession = (e) => {
    const searchProfession = e.target.value
    setSearchProfession(searchProfession)
  }

  const retrieveMembres = () => {
    MembreDataService.getAllbyIdP(id)
      .then((response) => {
        setMembres(response.data)
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

  const refreshList = () => {
    retrieveMembres()
  }

  const removeAllMembres = () => {
    MembreDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByProfession = () => {
    MembreDataService.findByProfession(searchProfession)
      .then((response) => {
        setMembres(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteMembre = (rowIndex) => {
    const id = membresRef.current[rowIndex].id
    MembreDataService.delete(id)
      .then((response) => {
        window.location.reload(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openMembre = (rowIndex) => {
    const id = membresRef.current[rowIndex].id
    navigate('/editMembre/' + id)
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
        Header: 'CIN',
        accessor: 'cin',
      },
      {
        Header: 'Profession',
        accessor: 'profession',
      },
      {
        Header: 'Poste occupee',
        accessor: 'poste_occupee',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openMembre(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteMembre(rowIdx)}
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: membres,
    })

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-8'>
              <div className='col-md-8'>
                <h3>{programme.titre}</h3>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search by profession'
                  value={searchProfession}
                  onChange={onChangeSearchProfession}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    onClick={findByProfession}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <button
                className='m-3 btn btn-sm btn-danger'
                onClick={removeAllMembres}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link
                to={'/addMembre/' + id}
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
export default ShowMembres
