import React from 'react'
import Header from '../../components/public/Header'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
