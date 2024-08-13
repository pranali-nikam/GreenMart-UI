import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo.png';

function SellerDashBoard() {
  const navigate = useNavigate();
  const sellerId = 1; // Example sellerId, replace with dynamic value if needed
  
  // Navigation handler for AddProduct
  const handleAddProductClick = () => {
    navigate(`/addProduct/${sellerId}`);
  };

  return (
    <div>
      <div className="header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" style={{ width: "120px" }} />
              </a>
            </div>
            <div className="col-md-6 text-center">
              <h2>Seller</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd nav */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <nav className="sidebar">
              <ul className="nav-menu">
                <div className="sidebar-menu">
                  <li>
                    <a href="/products">Profile</a>
                  </li>
                </div>
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
                    <a onClick={handleAddProductClick}>
                      Add Product
                    </a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>

          {/* Category */}
          <div className="col-md-9">
            <br />
            <center>
              <h4>Search by Category</h4>
            </center>
            <br />
            <div className="seller-grid">
              <div className="seller-card" onClick={() => navigate('/product1.html')}>
                Total Products
              </div>
              <div className="seller-card" onClick={() => navigate('/product1.html')}>
                Total Pending Orders
              </div>
              <div className="seller-card" onClick={() => navigate('/product1.html')}>
                Total Shipped Orders
              </div>
              <div className="seller-card" onClick={() => navigate('/product2.html')}>
                Total Delivered Orders
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <footer className="footer">
          <p>© 2024 GREENIFY</p>
        </footer>
      </div>
    </div>
  );
}

export default SellerDashBoard;
