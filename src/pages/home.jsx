import image1 from '../images/bamboo category page.jpg'
import image2 from '../images/self care.jpeg'
import image3 from '../images/Eco Essentials.jpeg'
import image4 from '../images/decorative.jpg'
import image5 from '../images/recycled.jpg'
import logo from '../images/logo.png'
function Home() {
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
              <form class="form-inline search-form">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-primary" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div class="col-md-3 text-right">
              <button class="btn btn-outline-secondary upload-btn">
                <i class="fas fa-upload"></i> WishList
              </button>

              <button class="btn btn-outline-secondary cart-btn">
                <i class="fas fa-shopping-cart"></i> Cart
              </button>

              <a href="/login" class="btn btn-outline-secondary account-btn">
                <i class="fas fa-user"></i> User Login
              </a>
              <a
                href="/adminLogin"
                class="btn btn-outline-secondary account-btn"
              >
                <i class="fas fa-user"></i> Admin Login
              </a>
              <a
                href="/sellerLogin"
                class="btn btn-outline-secondary account-btn"
              >
                <i class="fas fa-user"></i> Seller Login
              </a>
            </div>
          </div>
        </div>
      </div>

{/* 2nd nav */}

      <div>
        <nav class="navbar">
          <ul class="nav-menu">
            <li>
              <a href="/products">Bamboo Products</a>
            </li>
            <li>
              <a href="/products4">Health Care</a>
            </li>
            <li>
              <a href="/products2">Eco-friendly Bags</a>
            </li>
            <li>
              <a href="/products3">Personal Care</a>
            </li>
            <li>
              <a href="/products1">Handicraft</a>
            </li>
          </ul>
        </nav>
      </div>

<div>

  



</div>


{/* Category */}
      <div>
        <br/>
      <h4>Shop by Category </h4>
        <div class="product-grid">
          
          <div
            class="product-card"
            onclick="navigateToProduct('product1.html')"
          >
            <img src={image3} alt="Product 1" class="product-image" />
            <div class="product-name">Eco Essentials</div>
          </div>

          <div
            class="product-card"
            onclick="navigateToProduct('product1.html')"
          >
            <img src={image2} alt="Product 1" class="product-image" />
            <div class="product-name">Self Care</div>
          </div>

          <div
            class="product-card"
            onclick="navigateToProduct('product2.html')"
          >
            <img
              src={image1}
              alt="bamboo category page.jpg"
              class="product-image"
            />
            <div class="product-name"> Bamboo </div>
          </div>

          <div
            class="product-card"
            onclick="navigateToProduct('product3.html')"
          >
            <img src={image4} alt="facewsh.jpg" class="product-image" />
            <div class="product-name">Decorative Item</div>
          </div>

          <div
            class="product-card"
            onclick="navigateToProduct('product4.html')"
          >
            <img src={image5} alt="dressing.jpg" class="product-image" />
            <div class="product-name">Recycled</div>
          </div>
        </div>

        <script>
          {/* function navigateToProduct(url) {
  window.location.href = url
} */}
        </script>
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

export default Home;
