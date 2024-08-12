
import Footer from '../../components/Footer';
import logo from '../../images/logo.png'
function AdminDashBoard(){
    
   
    
      return (
        <div>
          <div class="header ">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <a class="navbar-brand" href="/">
                    <img src={logo} alt="Logo" style={{ width: " 120px" }} />
                  </a>
                </div>
                <div class="col-md-6 text-center">
                 <h2>Admin</h2>
                </div>
               
    
                 
                 
              </div>
            </div>
          </div>
    
    {/* 2nd nav */}
    
          <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
            <nav class="sidebar">
              <ul class="nav-menu">
                <div className="sidebar-menu">
                <li>
                  <a href="/products">Profile</a>
                </li>
                </div >
                <div className="sidebar-menu">
                <li>
                  <a href="/viewAllProduct">View Products</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewSeller">View Sellers</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewCustomer">View Customers</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewAllPendingOrder">View Pending Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewAllShippedOrder">View Shipped Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewAllDeliveredOrder">View Delivered Orders</a>
                </li>
                </div>
                
               
              </ul>
            </nav>
          
    
            </div>
    
      
    
    
    
    
    
    
    {/* Category */}
          <div className="col-md-9">
            <br/>
            <center>
          <h4>Search by Category </h4>
          </center>
          <br/>
            <div class="admin-grid">
              
              <div
                class="admin-card"
                onclick="navigateToProduct('product1.html')"
              >Total Customers
              </div>
    
              <div
                class="admin-card"
                onclick="navigateToProduct('product1.html')"
              >Total Pending Orders
              </div>
               
              <div
                class="admin-card"
                onclick="navigateToProduct('product1.html')"
              >Total Shipped Orders
              </div>
    
              <div
                class="admin-card"
                onclick="navigateToProduct('product2.html')"
              >Total Delivered Orders 
              </div>

              <div
                class="admin-card"
                onclick="navigateToProduct('product2.html')"
              >Total Products
              </div>
    
    
              
    
            </div>
            </div>
           
            
            <script>
              {/* function navigateToProduct(url) {
      window.location.href = url
    } */}
            </script>
          </div>
          </div>  
    
    {/* footer */}
    
          <Footer/>
          </div>
      );
    

    
}
export default AdminDashBoard