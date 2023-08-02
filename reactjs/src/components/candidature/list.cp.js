import React, { useState, useEffect, useMemo, useRef } from 'react'
import CandidatureDataService from '../../services/candidature.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const ShowCandidatures = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)
  let { id } = useParams()
  const [candidatures, setCandidatures] = useState([])
  const [searchDate_insertion, setSearchDate_insertion] = useState('')
  const candidaturesRef = useRef()
  candidaturesRef.current = candidatures
  const navigate = useNavigate()

  useEffect(() => {
    retrieveCandidatures(id)
  }, [id])

  const onChangeSearchDate_insertion = (e) => {
    const searchDate_insertion = e.target.value
    setSearchDate_insertion(searchDate_insertion)
  }

  const retrieveCandidatures = (id) => {
    CandidatureDataService.getAll(id)
      .then((response) => {
        console.log(response.data)
        setCandidatures(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveCandidatures()
  }

  const removeAllCandidatures = () => {
    CandidatureDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByDate_insertion = () => {
    CandidatureDataService.findByDate_insertion(searchDate_insertion)
      .then((response) => {
        setCandidatures(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteCandidature = (rowIndex) => {
    const id = candidaturesRef.current[rowIndex].id
    CandidatureDataService.delete(id)
      .then((response) => {
        navigate('/candidatures')
        let newCandidatures = [...candidaturesRef.current]
        newCandidatures.splice(rowIndex, 1)
        setCandidatures(newCandidatures)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const validerCandidature = (rowIndex) => {
    const id = candidaturesRef.current[rowIndex].id
    CandidatureDataService.validerCandidature(id)
      .then((response) => {
        window.location.reload()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openCandidature = (rowIndex) => {
    const id = candidaturesRef.current[rowIndex].id
    navigate('/editCandidature/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'CIN',
        accessor: 'cin',
      },
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prenom',
        accessor: 'prenom',
      },
      {
        Header: 'Date_insertion',
        accessor: 'date_ins',
      },
      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value == 0 ? 'En attente' : 'Validé'
        },
      },

      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          console.log('==============id user======================')
          console.log(props.row.original)
          console.log('====================================')
          return (
            <div>
              {!(currentUser.id == props.row.original.iduser) && (
                <button
                  onClick={() => deleteCandidature(rowIdx)}
                  className='m-3 btn btn-sm btn-danger'
                >
                  Annuler
                </button>
              )}
              {currentUser.profil == 4 && (
                <button
                  onClick={() => validerCandidature(rowIdx)}
                  className='m-3 btn btn-sm btn-success'
                >
                  Valider
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
    data: candidatures,
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
export default ShowCandidatures
