
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
import AddProduct from './pages/seller/addProduct'
import UpdateProduct from './pages/seller/updateProduct'
import ViewProduct from './pages/seller/viewProduct'
import ViewSeller from './pages/admin/viewSeller'
import ViewCustomer from './pages/admin/viewCustomer'
import ViewAllProduct from './pages/admin/viewAllProduct'
import ViewPendingOrder from './pages/order/viewPendingOrder'
import ViewAllPendingOrder from './pages/order/viewAllPendingOrder'
import ViewShippedOrder from './pages/order/viewShippedOrder'
import ViewAllShippedOrder from './pages/order/viewAllShippedOrder'
import ViewAllDeliveredOrder from './pages/order/viewAllDeliveredOrder'
import ViewDeliveredOrder from './pages/order/viewDeliveredOrder'


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
      
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/updateProduct' element={<UpdateProduct/>}/>
      <Route path='/viewProduct' element={<ViewProduct/>}/>
      <Route path='/viewSeller' element={<ViewSeller/>}/>
      <Route path='/viewCustomer' element={<ViewCustomer/>}/>
      <Route path='/viewAllProduct' element={<ViewAllProduct/>}/>
      <Route path='/viewPendingOrder' element={<ViewPendingOrder/>}/>
      <Route path='/viewAllPendingOrder' element={<ViewAllPendingOrder/>}/>
      <Route path='/viewShippedOrder' element={<ViewShippedOrder/>}/>
      <Route path='/viewAllShippedOrder' element={<ViewAllShippedOrder/>}/>
      <Route path='/viewAllDeliveredOrder' element={<ViewAllDeliveredOrder/>}/>
      <Route path='/viewDeliveredOrder' element={<ViewDeliveredOrder/>}/>



      </Routes>
    

      
      </div>


  )
}

export default App