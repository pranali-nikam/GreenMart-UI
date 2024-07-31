function ForgetPassword()
{
    return (
        <div>
        <h2 className='page-title'>Forget Password</h2>
  
        <div className='row'>
          <div className='col'></div>
  
          <div className='col'>
            <div className='form'>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input type='email'className='form-control'/>
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Old Password</label>
                <input type='password'className='form-control'/>
              </div>
              <div className='mb-3'>
                <label htmlFor=''>New Password</label>
                <input type='password'className='form-control'/>
              </div>
              <div className='mb-3'>
               
               
                <div>
                <button className='mt-2 btn btn-success'>
                  Submit
                </button>
               
                </div>
              </div>
            </div>
          </div>
  
          <div className='col'></div>
        </div>
      </div>
    );
}

export default ForgetPassword