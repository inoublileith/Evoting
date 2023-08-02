import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userService from '../services/user.service'
import { useState, useEffect } from 'react'


const Profile = () => {
  const navigate = useNavigate()
  const { user: currentUser } = useSelector((state) => state.auth)
  const [ userInfo, setUserInfo ] = useState([])

  useEffect(() => {
    userService.getUserInfo(currentUser.id)
    .then((response) => {
      setUserInfo(response.data)
      console.log(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])


  if (!currentUser) {
    return navigate('/login')
  }
  return (
    <div class='page-content'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-12'>
            <div class='page-title-box d-sm-flex align-items-center justify-content-between'>
              <h4 class='mb-sm-0 font-size-18'>Profile</h4>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='col-xl-9 col-lg-8'>
            <div class='card'>
              <div class='card-body'>
                <div class='row'>
                  <div class='col-sm order-2 order-sm-1'>
                    <div class='d-flex align-items-start mt-3 mt-sm-0'>
                      <div class='flex-shrink-0'>
                        <div class='avatar-xl me-3'>
                          <img
                            src='assets/images/users/avatar-2.jpg'
                            alt=''
                            class='img-fluid rounded-circle d-block'
                          />
                        </div>
                      </div>
                      <div class='flex-grow-1'>
                        <div>
                          <div class='d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13 mt-3'>
                            <div>
                              <h5>• Nom et prénom: </h5>
                              {userInfo.nom} {userInfo.prenom}
                            </div>
                          </div>
                          <div class='d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13 mt-3'>
                            <div>
                              <h5>• Login: </h5>
                              {userInfo.login}
                            </div>
                          </div>
                          <div class='d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13 mt-3'>
                            <div>
                              <h5>• E-mail: </h5>
                              {userInfo.email}
                            </div>
                          </div>
                          <div class='d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13 mt-3'>
                            <div>
                              <h5>• Téléphone: </h5>
                              {userInfo.tel}
                            </div>
                          </div>
                          <div class='d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13 mt-3'>
                            <div>
                              <h5>• Roles: </h5>
                              <p class='text-muted font-size-13'>
                                {currentUser.roles &&
                                  currentUser.roles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                  ))}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
