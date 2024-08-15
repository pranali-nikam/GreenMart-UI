import axios from 'axios'
import config from '../config'

export async function registerCustomer(firstName, lastName, email,password, dob,mobileNumber) {
  // body parameters
  const body = {
    firstName,
    lastName,
    email,
    password,
    dob,
    mobileNumber
}

const response = await axios.post(`${config.url}/users/register`,body)

return response.data
}


export async function registerSeller(firstName, lastName, email,password,dob,mobileNumber,storeName,address,phone,gstinNumber) {
  // body parameters
  const body = {
    user: {
        firstName,
        lastName,
        email,
        password,
        dob,
        mobileNumber
    },
    storeName,
    address,
    phone,
    gstinNumber
};

const response = await axios.post(`${config.url}/sellers/register`,body)

return response.data

}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(`${config.url}/login/signin`, body)

  // read JSON data (response)
  return response.data
}

export async function showCustomers() {
  // body parameters
  

  // make API call
  const response = await axios.get(`${config.url}/admin/customers`)

  // read JSON data (response)
  return response.data
}
export async function blockCustomers(id) {
  // body parameters
  

  // make API call
  const response = await axios.patch(`${config.url}/admin/block/${id}`, {
    is_blocked: true,  // Set is_blocked to true
  })

  // read JSON data (response)
  return response.data
}
export async function showSellers() {
  // body parameters
  

  // make API call
  const response = await axios.get(`${config.url}/admin/sellers`)

  // read JSON data (response)
  return response.data
}
export async function blockSellers(id) {
  // body parameters
  

  // make API call
  const response = await axios.patch(`${config.url}/admin/block/${id}`, {
    is_blocked: true,  // Set is_blocked to true
  })

  // read JSON data (response)
  return response.data
}

export async function getSellerProfile(sellerId) {
  try {
    const response = await axios.get(`${config.url}/sellers/getSellerProfile/${sellerId}`); 
    return response.data;
  } catch (error) {
    throw new Error("Error fetching seller profile: " + error.message);
  }
}
