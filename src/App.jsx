import React from 'react'
import SignUpForm from './components/SignUp/SignUpForm'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
