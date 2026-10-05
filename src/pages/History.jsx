import { Divider, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteResumeApi, getAllResumeAPI } from '../api/allApi'

function History() {


 const [downloads,setDownloads]=useState([])
  

   useEffect(()=>{
    displayResume()
   },[])


const displayResume=async()=>{
   const res = await getAllResumeAPI()
   console.log(res);
   setDownloads(res.data)
   
}

const deleteResume=async(id)=>{
  
const res = await  deleteResumeApi(id)
displayResume()

}

  return (
    <div className='m-3'>
      <div className="d-flex align-items-center justify-content-between">
        <div></div>
         <h1 className='text-center text-danger'>Downloaded Resumes</h1>
         <Link to={'/resume/:id/view'}>Back</Link>
      </div>
      <div className="row mt-5">
        
        {

          downloads?.length>0?
         
         downloads.map(item=>(
           <div className="col-lg-4">   
        <Paper sx={{padding:'10px'}}>
           <div className="d-flex justify-content-between align-items-center mb-4">

              <div>
                <h4> {item?.timestamp}</h4>
              </div>
             <button className='btn text-danger' onClick={()=>deleteResume(item?.id)}><i className="fa-solid fa-trash fa-xl"></i></button>
            
            </div>
            <div>
              <img src={item?.resumeImg} className="img-fluid" />
            </div>
        
      </Paper>
      </div>
          ))
         :
         <p className='text-center text-danger' >No Resumws Downloaded yet</p>
        }
      
      <div className="col-lg-8">
        
      </div>
      </div>
    </div>
  )
}

export default History