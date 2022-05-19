import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
//trouble with the react toastify import....
import 'react-toastify/dist/react-toastify.cjs.development'
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>,
  document.getElementById('root')
)
