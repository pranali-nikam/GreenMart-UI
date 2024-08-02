import image1 from '../images/triphala.jpg'
import image2 from '../images/kunkumadi_tailam.jpg'
import image3 from '../images/chavanprashnam.jpg'
import image4 from '../images/baby_oil.jpg'
import image5 from '../images/cough syrup.jpg'
function Product4() {
    return (
        
 
<div class="mcontainer">

<div class="header">

    <h1 class="page-title"><b>Health care</b></h1>
  </div>
  <div class="main-content">
  <div class="sidebar">
    
    <div class="sidebar-section">
      <h3>Categories</h3>
      
      <ul class="category-list">
        <li><a href="#">Eco Essentials</a></li>
        <li><a href="#">Organic </a></li>
        <li><a href="#">Bamboo Items</a></li>
        <li><a href="#">Skin care</a></li>
        <li><a href="#">Recycled</a></li>
      </ul>
    </div>

    
    <div class="sidebar-section">
      <h3>Filters</h3>
      <form class="filter-form">
        <label for="brand">Brand:</label>
        <input type="text" id="brand" name="brand"/>

        <label for="manufacturer">Manufacturer:</label>
        <input type="text" id="manufacturer" name="manufacturer"/>

        <label for="price">Price Range:</label>
        <input type="range" id="price" name="price" min="0" max="1000"/>

        <label for="discount">Discount:</label>
        <select id="discount" name="discount">
          <option value="0">Any</option>
          <option value="10">10% or more</option>
          <option value="20">20% or more</option>
          <option value="30">30% or more</option>
          <option value="40">40% or more</option>
          <option value="50">50% or more</option>
        </select>

        <button type="submit">Apply Filters</button>
      </form>
    </div>
  </div>


  
  <div class="products-list">
    
    
    <div class="product-item">
      <img src={image1} alt="Product 1"/>
      <h5>Triphala</h5>
      <p><i>ayurvedic churna</i></p>
      <p><b>Price: 115.00</b></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>

    <div class="product-item">
      <img src={image2} alt="Product 1"/>
      <h5>Kumkumadi tailam</h5>
      <p><i>Damage repair | massage oil</i></p>
      <p><b>Price: 325.00</b></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>


    <div class="product-item">
      <img src={image3} alt="Product 1"/>
      <h5>Chavanprashnam</h5>
      <p><i>Energy booster </i></p>
      <p><b>Price: 350.00</b></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>


    <div class="product-item">
      <img src={image4} alt="Product 1"/>
      <h5>Baby oil</h5>
      <p><i>child care</i></p>
      <p><b>Price: 400.00</b></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>


    <div class="product-item">
      <img src={image5} alt="Product 1"/>
      <h5>Respikot</h5>
      <p><i>Cough syrup</i></p>
      <p><b>Price: 150.00</b></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
    
    
  </div>
</div>
</div>



  
    )
  }
  
  export default Product4