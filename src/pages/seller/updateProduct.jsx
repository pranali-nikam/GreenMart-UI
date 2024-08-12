import Footer from '../../components/Footer';
import logo from '../../images/logo.png'
function UpdateProduct() {

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
      <h2 className='page-title'> Update Product</h2>

      <div className='row mt-5'>
        <div className='col-4'></div>
        


        <div className='col'>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Product Id</label>
                <input type='number'className='form-control'/>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Product Name</label>
                <input type='text'className='form-control'/>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Description</label>
                <input type ='text' className='form-control'/>
              </div>
            </div>
          </div>

         

        <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Price</label>
                <input type='number'className='form-control'/>
              </div>
            </div>
          </div>

         <div className='row'>
          <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Image</label>
                <input type='image' className='form-control'/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Category Id</label>
                <input type='number'className='form-control'/>
              </div>
            </div>
        </div>

        

          <div className='row'>
            <div className='col'>
              

              <button className='btn btn-success'>
                Update
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
</div>

 {/* footer */}
    
 <Footer/>
    

</div>
    );
}
export default UpdateProduct