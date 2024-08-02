
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
                  <a href="/products4">View Products</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/products2">View Orders</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/addProduct">Add Product</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/updateProduct">Update Product</a>
                </li>
                </div>
                <div className="sidebar-menu">
                <li>
                  <a href="/products2">Delete Product</a>
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
              >Total Orders
              </div>
    
              <div
                class="seller-card"
                onclick="navigateToProduct('product2.html')"
              >Total Delivery 
              </div>
    
              <div
                class="seller-card"
                onclick="navigateToProduct('product3.html')"
              > Add New Product
              </div>
    
              <div
                class="seller-card"
                onclick="navigateToProduct('product4.html')"
              >Update Product
              </div>
              <div
                class="seller-card"
                onclick="navigateToProduct('product3.html')"
              > Delete Product
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