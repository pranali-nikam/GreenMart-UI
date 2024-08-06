function Shipping() {
    return (
        
        
        <table>
            <tr>
        <div><div class="header">

       <h1 class="page-title"><b>Shipping Details</b></h1>
       </div>

      

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
                <label htmlFor=''>City</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>State</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Mobile No.</label>
                <input type='number'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Pin Code</label>
                <input type='number'className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
              <p>Free Shipping
                Between 2-5 working days.
              </p>
              </div>

              <button className='btn btn-success'>
                Save
              </button>
             
            </div>
          </div>
          </div>

        <div className='col-4'></div>
        </div>
     
      </div>
      </tr>
      </table>
      
   )
  }
  
  export default Shipping