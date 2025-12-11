import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useSearchParams } from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup';


import AdminNavbar from './adminComponents/Navbar/Navbar'
import AdminSidebar from './adminComponents/Sidebar/Sidebar'
import AdminAdd from './adminPages/Add/Add'
import AdminList from './adminPages/List/List'
import AdminOrder from './adminPages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import { Outlet } from 'react-router-dom'

const AdminLayout = () => (
  <div>
    <AdminNavbar />
    <hr />
    <div className="app-content">
      <AdminSidebar />
      <Outlet />
    </div>
  </div>
)

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          {/* Admin routes */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path="add" element={<AdminAdd />} />
            <Route path="list" element={<AdminList />} />
            <Route path="order" element={<AdminOrder />} />
          </Route>
        </Routes>

        <Footer />

      </div>
    </>
  )


}

export default App
