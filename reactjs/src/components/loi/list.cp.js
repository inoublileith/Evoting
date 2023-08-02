import React, { useState, useEffect, useMemo, useRef } from 'react'
import LoiDataService from '../../services/loi.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowLois = (props) => {
  const [lois, setLois] = useState([])
  const [searchType, setSearchType] = useState('')
  const loisRef = useRef()
  loisRef.current = lois
  const navigate = useNavigate()

  useEffect(() => {
    retrieveLois()
  }, [])

  const onChangeSearchType = (e) => {
    const searchType = e.target.value
    setSearchType(searchType)
  }

  const retrieveLois = () => {
    LoiDataService.getAll()
      .then((response) => {
        setLois(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveLois()
  }

  const removeAllLois = () => {
    LoiDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByType = () => {
    LoiDataService.findByType(searchType)
      .then((response) => {
        setLois(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteLoi = (rowIndex) => {
    const id = loisRef.current[rowIndex].id
    LoiDataService.delete(id)
      .then((response) => {
        navigate('/lois')
        let newLois = [...loisRef.current]
        newLois.splice(rowIndex, 1)
        setLois(newLois)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openLoi = (rowIndex) => {
    const id = loisRef.current[rowIndex].id
    navigate('/editLoi/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Regles',
        accessor: 'regle',
      },
      {
        Header: 'Condition_electeur',
        accessor: 'condition_electeur',
      },
      {
        Header: 'Condtion_candidat',
        accessor: 'condition_candidat',
      },

      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openLoi(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteLoi(rowIdx)}
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
      data: lois,
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
                  placeholder='Search by type'
                  value={searchType}
                  // onChange={this.onChangeSearchTitre}
                  onChange={onChangeSearchType}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    // onClick={this.searchTitre}
                    onClick={findByType}
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
                onClick={removeAllLois}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link to={'/addLoi'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowLois
