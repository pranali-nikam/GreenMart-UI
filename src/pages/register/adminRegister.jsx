function AdminRegister() {
    return (
      <div>
      <h2 className='page-title'>Admin Register</h2>

      <div className='row mt-5'>
        <div className='col-4'></div>

        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>First Name</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Last Name</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input type='email'className='form-control'/>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Phone Number</label>
                <input type='tel'className='form-control'/>
              </div>
            </div>
          </div>

         <div className='row'>
          <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Address</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input type='password'className='form-control'/>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input type='password'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
              <p>Already have user account? <a href="/adminLogin">Login here</a></p>
              </div>

              <button className='btn btn-success'>
                Register
              </button>
              <button className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
          </div>

        <div className='col-4'></div>
        </div>
     
      </div>
    )
  }
  
  export default AdminRegister