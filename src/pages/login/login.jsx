import { Link } from "react-router-dom"

function Login() {
    return (
        
      <div>
      <h2 className='page-title'>Login</h2>

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
              
                <p>Don't have user account? <a href="/register">Register here</a></p>
              </div>
              <button className='mt-2 btn btn-success'>
                Login
              </button>
              <button className='mt-2 btn btn-success'>
                <Link to='/forgotpassword' >Forgot password</Link>
              </button>
            </div>
          </div>
        </div>

        <div className='col'></div>
      </div>
    </div>
    )
  }
  
  export default Login