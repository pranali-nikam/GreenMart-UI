import logo from '../../images/logo.png'
function ViewDeliveredOrder(){
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
              <h2 className='page-title'> Delivered Orders</h2>
              <div className='container'>
              <div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						  <th>Date</th>
					    <th>Order Id</th>
					    <th>Customer Name</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                       
					</tr>
				</thead>
				<tbody>
			
				
					<tr>
						<td>2024/08/08</td>
						<td>34</td>
						<td>Customer</td>
                        <td>Delivered</td>
						<td>550.00 </td>
						
						
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
export default ViewDeliveredOrder