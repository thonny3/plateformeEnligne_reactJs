import { useState } from 'react'
import './App.css'
import PublicRoute from './Pages/Public/PublicRoute'
import AdminRoute from './Pages/Admin/AdminRoute'
import { Routes,Route } from 'react-router-dom'
function App() {
const [open,setOpen] = useState(false)

  return (
    <>
    <Routes>
        <Route path='/*' element={<PublicRoute/>}/>
        <Route path="/admin/*" element={<AdminRoute/>}/>
    </Routes>
   
    </>
  )
}

export default App
