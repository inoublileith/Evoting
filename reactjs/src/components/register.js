import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { registerAction } from '../actions/auth'
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    )
  }
}
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}
const Register = () => {
  const form = useRef()
  const checkBtn = useRef()

  const initialUser = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    login: '',
    password: '',
  }
  const [user, setUser] = useState(initialUser)
  const [iprofil, setIprofil] = useState('user')
  const [successful, setSuccessful] = useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const onChangeProfil = (e) => {
    const profil = e.target.value
    console.log('===============Profil=====================')
    console.log(profil)
    setIprofil(profil)
  }
  const handleRegister = (e) => {
    e.preventDefault()
    setSuccessful(false)
    form.current.validateAll()

    console.log('===============IProfil=====================')
    console.log(iprofil)

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        registerAction(
          user.nom,
          user.prenom,
          user.login,
          user.email,
          user.password,
          iprofil
        )
      )
        .then(() => {
          setSuccessful(true)
        })
        .catch(() => {
          setSuccessful(false)
        })
    }
  }
  return (
    <div class='auth-page'>
      <div class='container-fluid p-0'>
        <div class='row g-0'>
          <div class='col-xxl-3 col-lg-4 col-md-5'>
            <div class='auth-full-page-content d-flex p-sm-5 p-4'>
              <div class='w-100'>
                <div class='d-flex flex-column h-100'>
                  <div class='mb-4 mb-md-5 text-center'>
                    <a class='d-block auth-logo'>
                      <img src='assets/images/logo.png' alt='' height='50' />{' '}
                      <span class='logo-txt'>E-Voting</span>
                    </a>
                  </div>
                  <div class='auth-content my-auto'>
                    <div class='text-center'>
                      <h5 class='mb-0'>Créer un compte</h5>
                      {/* <p class='text-muted mt-2'>
                        Get your free Minia account now.
                      </p> */}
                    </div>
                    <Form onSubmit={handleRegister} ref={form}>
                      {!successful && (
                        <div>
                          <div className='form-group' style={{ marginTop: 10 }}>
                            <label htmlFor='login'>Nom </label>
                            <Input
                              type='text'
                              className='form-control'
                              name='nom'
                              value={user.nom}
                              onChange={handleInputChange}
                              validations={[required]}
                            />
                          </div>
                          <div className='form-group' style={{ marginTop: 10 }}>
                            <label htmlFor='login'>Prenom </label>
                            <Input
                              type='text'
                              className='form-control'
                              name='prenom'
                              value={user.prenom}
                              onChange={handleInputChange}
                              validations={[required]}
                            />
                          </div>
                          <div className='form-group'>
                            <label htmlFor='email'>E-mail</label>
                            <Input
                              type='text'
                              className='form-control'
                              name='email'
                              value={user.email}
                              onChange={handleInputChange}
                              validations={[required, validEmail]}
                            />
                          </div>
                          <div className='form-group' style={{ marginTop: 10 }}>
                            <label htmlFor='login'>Nom d'utilisateur</label>
                            <Input
                              type='text'
                              className='form-control'
                              name='login'
                              value={user.login}
                              onChange={handleInputChange}
                              validations={[required, vusername]}
                            />
                          </div>

                          <div className='form-group' style={{ marginTop: 10 }}>
                            <label htmlFor='password'>Mot de passe</label>
                            <Input
                              type='password'
                              className='form-control'
                              name='password'
                              value={user.password}
                              onChange={handleInputChange}
                              validations={[required, vpassword]}
                            />
                          </div>
                          <div className='form-group' style={{ marginTop: 10 }}>
                            <label htmlFor='profil'>Profil</label>
                            <select
                              name='profil'
                              onChange={onChangeProfil}
                              className='form-control'
                            >
                              <option value='user'>Choisir votre profil</option>
                              <option value='organisateurdevote'>
                                Organisateur
                              </option>
                              <option value='candidat'>Candidat</option>
                            </select>
                          </div>
                          <div className='form-group'>
                            <button
                              className='btn btn-primary btn-block'
                              style={{ marginLeft: 85, marginTop: 15 }}
                            >
                              Inscription
                            </button>
                          </div>
                        </div>
                      )}
                      {message && (
                        <div className='form-group'>
                          <div
                            className={
                              successful
                                ? 'alert alert-success'
                                : 'alert alert-danger'
                            }
                            role='alert'
                          >
                            {message}
                          </div>
                        </div>
                      )}
                      <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                    </Form>

                    <div class='mt-5 text-center'>
                      <p class='text-muted mb-0'>
                        Vous-avez un compte?{' '}
                        <a href='/login' class='text-primary fw-semibold'>
                          {' '}
                          Se connecter{' '}
                        </a>{' '}
                      </p>
                    </div>
                  </div>
                  {/* <div class='mt-4 mt-md-5 text-center'>
                    <p class='mb-0'>
                      ©{' '}
                      <script>document.write(new Date().getFullYear())</script>{' '}
                      Minia . Crafted with{' '}
                      <i class='mdi mdi-heart text-danger'></i> by Themesbrand
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div class='col-xxl-9 col-lg-8 col-md-7'>
            <div class='auth-bg pt-md-5 p-4 d-flex'>
              <div class='bg-overlay bg-primary'></div>
              <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div class='row justify-content-center align-items-center'>
                <div class='col-xl-7'>
                  <div class='p-0 p-sm-4 px-xl-0'>
                    <div
                      id='reviewcarouselIndicators'
                      class='carousel slide'
                      data-bs-ride='carousel'
                    >
                      <div class='carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0'>
                        <button
                          type='button'
                          data-bs-target='#reviewcarouselIndicators'
                          data-bs-slide-to='0'
                          class='active'
                          aria-current='true'
                          aria-label='Slide 1'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#reviewcarouselIndicators'
                          data-bs-slide-to='1'
                          aria-label='Slide 2'
                        ></button>
                        <button
                          type='button'
                          data-bs-target='#reviewcarouselIndicators'
                          data-bs-slide-to='2'
                          aria-label='Slide 3'
                        ></button>
                      </div>

                      <div class='carousel-inner'>
                        <div class='carousel-item active'>
                          <div class='testi-contain text-white'>
                            <i class='bx bxs-quote-alt-left text-success display-6'></i>

                            <h4 class='mt-4 fw-medium lh-base text-white'>
                              “L’utilisation de son droit de vote est une façon
                              d’exercer sa citoyenneté. Il permet aux citoyens
                              de protéger leur liberté et de faire fonctionner
                              la démocratie”
                            </h4>
                            <div class='mt-4 pt-3 pb-5'>
                              <div class='d-flex align-items-start'>
                                <div class='flex-shrink-0'></div>
                                <div class='flex-grow-1 ms-3 mb-4'>
                                  <h5 class='font-size-18 text-white'></h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='carousel-item'>
                          <div class='testi-contain text-white'>
                            <i class='bx bxs-quote-alt-left text-success display-6'></i>

                            <h4 class='mt-4 fw-medium lh-base text-white'>
                              “Le vote est le premier et le plus simple mode
                              d’action dans une démocratie”
                            </h4>
                            <div class='mt-4 pt-3 pb-5'>
                              <div class='d-flex align-items-start'>
                                <div class='flex-shrink-0'></div>
                                <div class='flex-grow-1 ms-3 mb-4'>
                                  <h5 class='font-size-18 text-white'></h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='carousel-item'>
                          <div class='testi-contain text-white'>
                            <i class='bx bxs-quote-alt-left text-success display-6'></i>

                            <h4 class='mt-4 fw-medium lh-base text-white'>
                              “Voter est une obligation, une responsabilité”
                            </h4>
                            <div class='mt-4 pt-3 pb-5'>
                              <div class='d-flex align-items-start'>
                                <div class='flex-1 ms-3 mb-4'>
                                  <h5 class='font-size-18 text-white'></h5>
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
      </div>
    </div>
  )
}
export default Register
