import logo from '../../images/logo.png'
function ViewSeller(){
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
        <div className="div-center">
        <div>
              <h2 className='page-title'> Sellers List</h2>
              <div className='container'>
              <div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th> Name</th>
					    <th>Email</th>
					    <th>Mobile No.</th>
                        <th>StoreName</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>GST Number</th>
                        <th>Action</th>
					</tr>
				</thead>
				<tbody>
			
				
					<tr>
						<td>seller name</td>
						<td>seller@gmail.com</td>
						<td>1234567890</td>
                        <td>Pune</td>
                        <td>GreenMart</td>
						<td>0213453485 </td>
						<td>SPT23445</td>
						<td>
							<a class="btn btn-danger" >Block</a>
						</td>
						<td>
						    <a class="btn btn-secondary" >Cancel</a>
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
export default ViewSeller