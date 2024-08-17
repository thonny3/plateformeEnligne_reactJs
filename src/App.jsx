import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Home from './components/publicPage/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

function App() {
const [open,setOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/connexion' element={<SignIn/>}/>
        <Route path='/registre' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
