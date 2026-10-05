import axios from "axios";


const axiosInstance = axios.create({
    baseURL:'https://rbuilder-backend-o4v4.onrender.com',
    timeout:5000
})
//headers-used only when sensitive data is passed
// response interceptors:handling global /common error
  axiosInstance.interceptors.response.use(
    (response)=>{return response},
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("un-authorized access...please login");
                
            }
            else if(status==404){
             console.log("API not found");

            }
            else if(status==500){
                console.log("server error !!!");
                
            }
            else if(error.request){
                console.log("no response for server");
                
            }
            else{
            console.log("Error:"+error.message);
            
            }
            return Promise.reject(err)
        }
    }
)

export default axiosInstance