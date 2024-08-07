import logo from '../../images/logo.png'
function ViewProduct(){
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
        <div className="div-center">
        <div>
              <h2 className='page-title'> Product List</h2>
              <div className='container'>
              <div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Product Name</th>
					    <th>Description</th>
					    <th>Stock</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category Name</th>
                        <th>Action</th>
					</tr>
				</thead>
				<tbody>
			
				
					<tr>
						<td>Product</td>
						<td>Description</td>
						<td>Quantity</td>
                        <td>Image</td>
						<td>Price </td>
						<td>Category</td>
						<td>
							<a class="btn btn-warning" href="/updateProduct">Update</a>
						</td>
						<td>
						    <a class="btn btn-danger" >Delete</a>
						</td>
					</tr>

				
					
				</tbody>
			</table>
            </div>
		</div>
            
             
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
export default ViewProduct