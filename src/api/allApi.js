import apiservice from "./apiaervices";

//add resume 
//more api are needed to export from this file so
export const addResumeApi=async(reqBody)=>{
      
    return await apiservice('POST','/allResumes',reqBody)

}
//get single resume with id called by view
export const  getResumeAPI = async(resumeId)=>{

    return await apiservice("GET",`/allResumes/${resumeId}`,{})
}


export const editResumeApi=async(resumeId,reqBody)=>{
      
    return await apiservice('PUT',`/allResumes/${resumeId}`,reqBody)

}

export const addHistoryApi=async(reqBody)=>{
      
    return await apiservice('POST',`/history`,reqBody)

}

export const  getAllResumeAPI = async()=>{

    return await apiservice("GET",`/history`,{})
}

export const  deleteResumeApi = async(resumeId)=>{

    return await apiservice("DELETE",`/history/${resumeId}`,{})
}