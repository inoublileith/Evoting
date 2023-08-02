import React, { useState } from 'react'
import MembreDataService from '../../services/membre.service'
import { useParams } from 'react-router-dom'

const AddMembre = () => {
  let { idp } = useParams()
  
  const initialMembreState = {
    id: null,
    nom: '',
    prenom: '',
    cin: '',
    profession: '',
    poste_occupee: '',
    idprogramme: 0
  }
  const [membre, setMembre] = useState(initialMembreState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setMembre({ ...membre, [name]: value, idprogramme: idp })
    console.log(membre)
  }

  const saveMembre = () => {
    var data = {
      profession: membre.profession,
      poste_occupee: membre.poste_occupee,
      nom: membre.nom,
      prenom: membre.prenom,
      cin: membre.cin,
      idprogramme: membre.idprogramme
    }
    MembreDataService.create(data)
      .then((response) => {
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newMembre = () => {
    setMembre(initialMembreState)
    setSubmitted(false)
  }

  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='submit-form'>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className='btn btn-success' onClick={newMembre}>
                  New One
                </button>
              </div>
            ) : (
              <div>
                <div className='input-group mb-3'>
                  <label htmlFor='nom' class='input-group-text' id='nom'>
                    Nom
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='nom'
                    required
                    value={membre.nom}
                    onChange={handleInputChange}
                    name='nom'
                    aria-describedby='nom'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='prenom' class='input-group-text' id='prenom'>
                    Prénom
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='prenom'
                    required
                    value={membre.prenom}
                    onChange={handleInputChange}
                    name='prenom'
                    aria-describedby='prenom'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label htmlFor='cin' class='input-group-text' id='cin'>
                    CIN
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='cin'
                    required
                    value={membre.cin}
                    onChange={handleInputChange}
                    name='cin'
                    aria-describedby='cin'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='profession'
                    class='input-group-text'
                    id='profession'
                  >
                    Profession
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='profession'
                    required
                    value={membre.profession}
                    onChange={handleInputChange}
                    name='profession'
                    aria-describedby='profession'
                  />
                </div>
                <div className='input-group mb-3'>
                  <label
                    htmlFor='poste_occupee'
                    class='input-group-text'
                    id='poste_occupee'
                  >
                    Poste occupée
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='poste_occupee'
                    required
                    onChange={handleInputChange}
                    name='poste_occupee'
                    aria-describedby='profession'
                    value={membre.poste_occupee}
                  />
                </div>
                <button onClick={saveMembre} className='btn btn-success'>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddMembre
