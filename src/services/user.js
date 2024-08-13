import axios from 'axios'
import config from '../config'

export async function register(firstName, lastName, email,password,dob,mobileNumber){

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

// export async function login(email,password){

//     const body = {
//         email,
//         password,
//     }


// const response = await axios.post(`${config.url}/users/login`,body)

// return response.data
// }