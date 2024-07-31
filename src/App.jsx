
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import AdminLogin from './pages/adminLogin'
import AdminRegister from './pages/adminRegister'
import SellerLogin from './pages/sellerLogin'
import SellerRegister from './pages/sellerRegister'

import { Router } from 'react-router-dom'
import Product1 from './pages/products1'
import Product2 from './pages/products2'
import Product from './pages/products'
import Product3 from './pages/products3'
import Product4 from './pages/products4'
import ForgetPassword from './pages/forgotpassword'
import AdminDashboard from './pages/Admin/admin_dashboard'
import Seller from './pages/Admin/seller'
import Users from './pages/Admin/users'
import ProductD from './pages/Admin/productDetails'
import ForgetPasswordA from './pages/Admin/forgotpassAdmin'


function App() {
  return (
   
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adminRegister' element={<AdminRegister/>}/>
      <Route path='/adminLogin' element={< AdminLogin/>}/>
      <Route path='/register' element={< Register/>}/>
      <Route path='/sellerLogin' element={<SellerLogin/>}/>
      <Route path='/sellerRegister' element={<SellerRegister/>}/>
      <Route path='/products' element={< Product/>}/>
      <Route path='/forgotpassword' element={< ForgetPassword/>}/>
      <Route path='/products1' element={< Product1/>}/>
      <Route path='/products2' element={< Product2/>}/>
      <Route path='/products3' element={< Product3/>}/>
      <Route path='/products4' element={< Product4/>}/>
      <Route path='/admin_dashboard' element={< AdminDashboard/>}/>
      <Route path='/seller' element={< Seller/>}/>
      <Route path='/users' element={< Users/>}/>
      <Route path='/productDetails' element={< ProductD/>}/>
      
      <Route path='/forgotpassAdmin' element={< ForgetPasswordA/>}/>
      




    

      </Routes>
    

      
      </div>


  )
}

export default App