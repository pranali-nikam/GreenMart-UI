function Payment() {
    return (
      <div class="mcontainer">

<div class="header">

    <h1 class="page-title"><b>Proceed to Pay...</b></h1>
  </div>
  <div class="main-content">
  <div class="sidebar">
    
    <div class="sidebar-section">
      <h3>Mode of Payment</h3>
      
      <ul class="category-list">
        <li><a href="#">Cash On Delivery</a></li>
        <li><a href="#">UPI </a></li>
       
        
      </ul>
    </div>
</div>

<table>
    <tr>
    <div>
<input
  class="form-control mr-sm-2"
  type="search"
  placeholder="Search"
  aria-label="Search" />
</div>
    </tr>
<tr> <h5>Amount Payable</h5>
      
      <button className='btn btn-primary ms-2'>
              Proceed to Pay
      </button></tr>
     
 
</table>

</div>
</div>
   )
  }
  
  export default Payment