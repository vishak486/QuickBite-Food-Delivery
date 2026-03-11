import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import AdminManageUsers from './pages/AdminManageUsers'
import AdminManageRestaurants from './pages/AdminManageRestaurants'
import AdminManageAllOrders from './pages/AdminManageAllOrders'

function App() {

  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            {/* Admin Routes */}
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/admin-users' element={<AdminManageUsers/>}/>
            <Route path='/admin-restaurants' element={<AdminManageRestaurants/>}/>
            <Route path='/admin-orders' element={<AdminManageAllOrders/>}/>
        </Routes>
        <Footer/>

    </>
  )
}

export default App
