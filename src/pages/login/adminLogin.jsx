function AdminLogin() {
    return (
      <div>
      <h2 className='page-title'>Admin Login</h2>

      <div className='row'>
        <div className='col'></div>

        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input type='email'className='form-control'/>
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input type='password'className='form-control'/>
            </div>
            <div className='mb-3'>
              <div>
              
                <p>Don't have user account? <a href="/adminRegister">Register here</a></p>
              </div>
              <button className='mt-2 btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className='col'></div>
      </div>
    </div>
    )
  }
  
  export default AdminLogin