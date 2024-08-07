
import logo from '../../images/logo.png'
function SellerDashBoard(){
    
   
    
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
                 <h2>Seller</h2>
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
                  <a href="/viewProduct">View Products</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewPendingOrder">View Pending Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewShippedOrder">View Shipped Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/viewDeliveredOrder">View Delivered Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/addProduct">Add Product</a>
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
            <div class="seller-grid">
              
              <div
                class="seller-card"
                onclick="navigateToProduct('product1.html')"
              >Total Products
              </div>
    
              <div
                class="seller-card"
                onclick="navigateToProduct('product1.html')"
              >Total Pending Orders
              </div>

              <div
                class="seller-card"
                onclick="navigateToProduct('product1.html')"
              >Total Shiiped Orders
              </div>
    
              <div
                class="seller-card"
                onclick="navigateToProduct('product2.html')"
              >Total Delivered Orders
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
    
          <div>
            <footer className="footer">
              <p>© 2024 GREENIFY</p>
            </footer>
          </div>
          </div>
      );
    

    
}
export default SellerDashBoard