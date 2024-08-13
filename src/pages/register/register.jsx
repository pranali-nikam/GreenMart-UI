import './Register.css';
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { register } from '../../services/user';

function Register() {


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dob, setDob] = useState('')

  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/login')
  }

  const isValidEmail = () => {
    return email.includes('@')
  }

  const onRegister = async () => {
    if (firstName.length === 0) {
      toast.error('Hey! Enter your name')

    }
    else if (lastName.length === 0) {
      toast.error('Enter correct  username')
    }
    else if (email.length === 0) {
      toast.error('Hey! Enter your email')
    }
    else if (!isValidEmail()) {
      toast.warning('Email is not valid')
    }
    else if (password.length === 0) {
      toast.error('Hey! Enter a password')
    }
    else if (confirmPassword.length === 0) {
      toast.error('Hey! Confirm your password')
    }
    else if (password !== confirmPassword) {
      toast.error('password does not match!')
    }
    else if (mobileNumber.length === 0 || mobileNumber.length !== 10) {
      toast.error('Enter correct mobile no')
    }
    else {
      try {
        const result = await register(firstName, lastName, email, password, dob, mobileNumber);
        toast.success('Successfully registered a new customer');
        navigate('/login');
      } catch (error) {
        toast.error('Registration failed. Please try again.');
      }
    }


  }

  return (
    <div>
      <h2 className='page-title'>Register</h2>

      <div className='row mt-5'>
        <div className='col-4'></div>

        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>First Name</label>
                <input onChange={(e) => setFirstName(e.target.value)}
                  type='text' className='form-control' />

              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)}
                  type='text' className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input onChange={(e) => setEmail(e.target.value)}
                  type='email' className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Mobile Number</label>
                <input onChange={(e) => setMobileNumber(e.target.value)}
                  type='tel' className='form-control' />
              </div>
            </div>
          </div>

          <div className="row">
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor="">Birthdate</label>
                <input onChange={(e) => setDob(e.target.value)}
                  type="date" className="form-control" />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input onChange={(e) => setPassword(e.target.value)}
                  type='password' className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)}
                  type='password' className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <p>Already have user account?<Link to='/login'>Login here</Link></p>
              </div>

              <button onClick={onRegister} className='btn btn-success'>
                Register
              </button>
              <button onClick={onCancel} className='btn btn-danger ms-2'>
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


export default Register