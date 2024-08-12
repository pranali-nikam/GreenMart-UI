import Footer from '../../components/Footer';
import logo from '../../images/logo.png'
function ViewCustomer(){
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
              <h2 className='page-title'> Customers List</h2>
              <div className='container'>
              <div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>First Name</th>
					    <th>Last Name</th>
					    <th>Email</th>
                        <th>Password</th>
                        <th>Dob</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
					</tr>
				</thead>
				<tbody>
			
				
					<tr>
						<td>Nilesh</td>
						<td>Chavan</td>
						<td>Nilesh@gmail.com</td>
                        <td>abcd</td>
                        <td>12/3/1998</td>
						<td>1234567890 </td>
						
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
            
         <Footer/>
            
        
        </div>
        
    );
}
export default ViewCustomer