
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Register from './pages/register/register'
import Login from './pages/login/login'
import Home from './pages/home'
import AdminLogin from './pages/login/adminLogin'
import AdminRegister from './pages/register/adminRegister'
import SellerLogin from './pages/login/sellerLogin'
import SellerRegister from './pages/register/sellerRegister'

import { Router } from 'react-router-dom'
import Product1 from './pages/products1'
import Product2 from './pages/products2'
import Product from './pages/products'
import Product3 from './pages/products3'
import Product4 from './pages/products4'
import ForgetPassword from './pages/login/forgotpassword'
import SellerDashBoard from './pages/seller/sellerDashBoard'
import AdminDashboard from './pages/admin/adminDashBoard'
import ProductDetails from './pages/admin/productDetails'
import AddProduct from './pages/seller/addProduct'
import UpdateProduct from './pages/seller/updateProduct'

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
      <Route path='/sellerDashBoard' element={<SellerDashBoard/>}/>
      <Route path='/adminDashBoard' element={<AdminDashboard/>}/>
      <Route path='/productDetails' element={<ProductDetails/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/updateProduct' element={<UpdateProduct/>}/>


      </Routes>
    

      
      </div>


  )
}

export default App