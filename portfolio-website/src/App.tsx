import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import HomePage from './HomePage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
