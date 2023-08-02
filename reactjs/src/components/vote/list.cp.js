import React, { useState, useEffect, useMemo, useRef } from 'react'
import VoteDataService from '../../services/vote.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowVotes = (props) => {
  const [votes, setVotes] = useState([])
  const [searchDate, setSearchDate] = useState('')
  const votesRef = useRef()
  votesRef.current = votes
  const navigate = useNavigate()
  useEffect(() => {
    retrieveVotes()
  }, [])
  const onChangeSearchDate = (e) => {
    const searchDate = e.target.value
    setSearchDate(searchDate)
  }
  const retrieveVotes = () => {
    VoteDataService.getAll()
      .then((response) => {
        setVotes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = () => {
    retrieveVotes()
  }
  const removeAllVotes = () => {
    VoteDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const findByDate = () => {
    VoteDataService.findByDate(searchDate)
      .then((response) => {
        setVotes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const deleteVote = (rowIndex) => {
    const id = votesRef.current[rowIndex].id
    VoteDataService.delete(id)
      .then((response) => {
        navigate('/votes')
        let newVotes = [...votesRef.current]
        newVotes.splice(rowIndex, 1)
        setVotes(newVotes)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openVote = (rowIndex) => {
    const id = votesRef.current[rowIndex].id
    navigate('/editVote/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openVote(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteVote(rowIdx)}
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
      data: votes,
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
                  placeholder='Search by date'
                  value={searchDate}
                  // onChange={this.onChangeSearchTitre}
                  onChange={onChangeSearchDate}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    // onClick={this.searchTitre}
                    onClick={findByDate}
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
                onClick={removeAllVotes}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link to={'/addVote'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowVotes
