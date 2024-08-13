import axios from 'axios'
import config from '../config'

export async function register(firstName,lastName, email,dob,password,storeName,address,mobileNumber,phone,gstinNumber){

    const body = {
        firstName,
        lastName,
        email,
        dob,
        password,
        storeName,
        address,
        mobileNumber,
        phone,
        gstinNumber
    }

    const response = await axios.post(`${config.url}/sellers/register`,body)
    
    return response.data
}

// export async function login(email,password){

//     const body = {
//         email,
//         password,
//     }


// const response = await axios.post(`${config.url}/sellers/login`,body)

// return response.data
// }