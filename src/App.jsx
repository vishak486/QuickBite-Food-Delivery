import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import ProtectedRoute from './components/ProtectedRoute'
import AdminManageCategories from './pages/AdminManageCategories'
import RestaurantCreateProfile from './pages/RestaurantCreateProfile '
import RestaurantDashboard from './pages/RestaurantDashboard'
import RestaurantManageMenu from './pages/RestaurantManageMenu'
import RestaurantManageProfile from './pages/RestaurantManageProfile'
import RestaurantMenuDetails from './pages/RestaurantMenuDetails'
import CartManage from './pages/CartManage'


function App() {
  const location=useLocation()
  const hideLayout=location.pathname.startsWith('/admin') ||location.pathname.startsWith('/restaurant')

  return (
    <>
        {!hideLayout &&<Header/>}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/foodmenu-details/:id' element={<RestaurantMenuDetails/>}/>

            {/* Admin Routes */}
            <Route path='/admin' element={<ProtectedRoute allowedRole="admin"><AdminDashboard/></ProtectedRoute>}/>
            <Route path='/admin-users' element={<ProtectedRoute allowedRole="admin"><AdminManageUsers/></ProtectedRoute>}/>
            <Route path='/admin-restaurants' element={<ProtectedRoute allowedRole="admin"><AdminManageRestaurants/></ProtectedRoute>}/>
            <Route path='/admin-orders' element={<ProtectedRoute allowedRole="admin"><AdminManageAllOrders/></ProtectedRoute>}/>
            <Route path='/admin-categories' element={<ProtectedRoute allowedRole="admin"><AdminManageCategories/></ProtectedRoute>}/>


            {/* Restaurant Admin Routes */}
            <Route path='/restaurant-createprofile' element={<ProtectedRoute allowedRole="restaurant_admin"><RestaurantCreateProfile/></ProtectedRoute>}/>
            <Route path='/restaurant' element={<ProtectedRoute allowedRole="restaurant_admin"><RestaurantDashboard/></ProtectedRoute>}/>
            <Route path='/restaurant-menu' element={<ProtectedRoute allowedRole="restaurant_admin"><RestaurantManageMenu/></ProtectedRoute>}/>
            <Route path='/restaurant-manage-profile' element={<ProtectedRoute allowedRole="restaurant_admin"><RestaurantManageProfile/></ProtectedRoute>} />

            {/* Customer Routes */}
            <Route path='/customer-cart' element={<ProtectedRoute allowedRole="customer"><CartManage/></ProtectedRoute>} />

        </Routes>
        {!hideLayout && <Footer/>}

    </>
  )
}

export default App
