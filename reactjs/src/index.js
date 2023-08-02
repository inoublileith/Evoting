import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.css'
import App from './App'
import Login from './components/login'
import Register from './components/register'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
let path = window.location.pathname
const Layout = () => {
  let ret = ''
  const { user: currentUser } = useSelector((state) => state.auth)
  console.log(currentUser)
  let inter = ''
  if (path == '/register') {
    inter = <Register />
    console.log('test', path)
    if (localStorage.getItem('isRefresh') === undefined) {
      localStorage.setItem('isRefresh', true)
      window.location.reload()
    }
  }
  if (path == '/login' || path == '/') {
    inter = <Login />
    console.log('test', path)
    if (localStorage.getItem('isRefresh') === undefined) {
      localStorage.setItem('isRefresh', true)
      window.location.reload()
    }
  }
  currentUser ? (ret = <App />) : (ret = inter)

  return ret
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()

reportWebVitals()
