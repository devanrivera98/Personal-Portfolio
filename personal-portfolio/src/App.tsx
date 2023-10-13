// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from './Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
