import React, { useState, useEffect, useMemo, useRef } from 'react'
import OrganisateurdevoteDataService from '../../services/organisateurdevote.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import organisateurdevoteService from '../../services/organisateurdevote.service'
const ShowOrganisateurdevotes = (props) => {
  const [organisateurdevotes, setOrganisateurdevotes] = useState([])
  const organisateurdevotesRef = useRef()
  organisateurdevotesRef.current = organisateurdevotes
  const navigate = useNavigate()

  useEffect(() => {
    retrieveOrganisateurdevotes()
  }, [])
  const retrieveOrganisateurdevotes = () => {
    OrganisateurdevoteDataService.getAll()
      .then((response) => {
        setOrganisateurdevotes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveOrganisateurdevotes()
  }
  const deleteOrganisateurdevote = (rowIndex) => {
    const id = organisateurdevotesRef.current[rowIndex].id
    OrganisateurdevoteDataService.delete(id)
      .then((response) => {
        navigate('/organisateurdevotes')
        let newOrganisateurdevotes = [...organisateurdevotesRef.current]
        newOrganisateurdevotes.splice(rowIndex, 1)
        setOrganisateurdevotes(newOrganisateurdevotes)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const autoriserUser = (rowIndex) => {
    const id = organisateurdevotesRef.current[rowIndex].id
    organisateurdevoteService
      .autoriserUser(id)
      .then(() => {
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const bloquerUser = (rowIndex) => {
    const id = organisateurdevotesRef.current[rowIndex].id
    organisateurdevoteService
      .bloquerUser(id)
      .then(() => {
        refreshList()
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
        Header: 'Fonction',
        accessor: 'fonction',
      },
      {
        Header: 'Grade',
        accessor: 'grade',
      },
      {
        Header: 'Organisme',
        accessor: 'organisme',
      },
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
                onClick={() => deleteOrganisateurdevote(rowIdx)}
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
    data: organisateurdevotes,
  })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-8'>
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
export default ShowOrganisateurdevotes
