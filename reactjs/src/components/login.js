import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { loginAction } from '../actions/auth'
const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}
const Login = (props) => {
  const navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [login, setlogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const onChangelogin = (e) => {
    const login = e.target.value
    setlogin(login)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(loginAction(login, password))
        .then(() => {
          props.history.push('/profile')
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }
  if (isLoggedIn) {
    return navigate('/profile')
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
                    <a class='auth-logo'>
                      <img src='assets/images/logo.png' alt='' height='50' />{' '}
                      <span class='logo-txt'>
                        <b>E-Voting</b>
                      </span>
                    </a>
                  </div>
                  <div class='auth-content my-auto'>
                    <div class='text-center'>
                      <h5 class='logo-txt'>Se Connecter</h5>
                      <p class='text-muted mt-2'>Bienvenu!</p>
                    </div>
                    <Form onSubmit={handleLogin} ref={form}>
                      <div className='form-group'>
                        <label htmlFor='login'>Nom d'utilisateur</label>
                        <Input
                          type='text'
                          className='form-control'
                          name='login'
                          value={login}
                          onChange={onChangelogin}
                          validations={[required]}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='password'>Mot de passe</label>
                        <Input
                          type='password'
                          className='form-control'
                          name='password'
                          value={password}
                          onChange={onChangePassword}
                          validations={[required]}
                        />
                      </div>

                      <div>
                        <button
                          className='btn btn-primary btn-block'
                          disabled={loading}
                          style={{ marginLeft: 90, marginTop: 15, width: 100 }}
                        >
                          {loading && (
                            <span className='spinner-border spinner-border-sm'></span>
                          )}
                          <span>Connexion</span>
                        </button>
                      </div>

                      {message && (
                        <div className='form-group'>
                          <div className='alert alert-danger' role='alert'>
                            {message}
                          </div>
                        </div>
                      )}
                      <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                    </Form>

                    <div class='mt-5 text-center'>
                      <p class='text-muted mb-0'>
                        Vous n'avez pas un compte?{' '}
                        <a href='/register' class='text-primary fw-semibold'>
                          {' '}
                          Inscrivez-vous!{' '}
                        </a>{' '}
                      </p>
                    </div>
                  </div>
                  <div class='mt-4 mt-md-5 text-center'></div>
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
                              “ L’utilisation de son droit de vote est une façon
                              d’exercer sa citoyenneté. Il permet aux citoyens
                              de protéger leur liberté et de faire fonctionner
                              la démocratie.”
                            </h4>
                            <div class='mt-4 pt-3 pb-5'>
                              <div class='d-flex align-items-start'>
                                <div class='flex-grow-1 ms-3 mb-4'>
                                  <h5 class='font-size-18 text-white'></h5>
                                  <p class='mb-0 text-white-50'></p>
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
                                <div class='flex-grow-1 ms-3 mb-4'>
                                  <h5 class='font-size-18 text-white'></h5>
                                  <p class='mb-0 text-white-50'></p>
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
export default Login
