import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import Dashboard from './Dashboard'
import Error from '../../_utils/Error'
import Test from './Test'

export default function AdminRoute() {
  return (
    <>
    <Routes>
        <Route element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='dasboard' element={<Dashboard/>}/>
            <Route path='test' element={<Test/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>    
    </Routes>
    </>
  )
}
