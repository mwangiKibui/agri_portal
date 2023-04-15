// A mock function to mimic making an async request for data
// const axios = require('axios').default;

const base_url = "http://192.99.223.132:81/";

async function getAuthToken(){
    try{
        let auth = {
            "email": "admin@admin.com",
            "password":"password"
        };
        let response = await fetch(`${base_url}api/login`,{
            method:"POST",
            body:JSON.stringify(auth),
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        response = await response.json();
        return response;
    }catch(error){
        return false;
    }
}

module.exports.fetchEnquiriesHome = async() =>  {
    try{
        let auth = await getAuthToken();
        if(auth){
            let response = await fetch(`${base_url}api/bids?top=4`,{
                method:"GET",
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${auth.access_token}`
                }
            });
            let enquiries = await response.json();
            return enquiries;
        }else{
            return [];
        }
    }catch(error){
        console.log("your error is ",error);
        return [];
    }
}

// export async function addEmployee(data){
//     let response = await axios.post('https://employeeappbackend-production.up.railway.app',data,{
//         headers:{
//             "Content-Type":"application/json"
//         }
//     });
//     return response.data;
// }

// export async function updateEmployee(email,data){
//     let response = await axios.put(`https://employeeappbackend-production.up.railway.app?email=${email}`,data,{
//         headers:{
//             "Content-Type":"application/json"
//         }
//     });
//     return response.data;
// }

// export async function getEmployeeByEmail(email){
//     let response = await axios.get(`https://employeeappbackend-production.up.railway.app?email=${email}`);
//     return response.data;
// }

// export async function deleteEmployee(email){
//     let response = await axios.delete(`https://employeeappbackend-production.up.railway.app?email=${email}`,{
//         headers:{
//             "Content-Type":"application/json"
//         }
//     });
//     return response.data;
// }