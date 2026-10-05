import React, { useEffect, useRef, useState } from 'react'
import Preview from '../components/Preview'
import Edit from '../components/Edit'
import { Link, useParams } from 'react-router-dom'   //useParams is a React Router hook used to get values from the URL parameters.
import { addHistoryApi, getResumeAPI } from '../api/allApi'
import html2canvas from 'html2canvas'  //npm i html2canvas -to take screenshots
import jsPDF from 'jspdf'


function View() {
   let {id}=useParams()  
                          //A state variable is a variable in React that stores data that can change, and when it changes, React re-renders the component.
   const [resumeData,setResumeData]=useState({})// //useState() needs an initial value.   //same key passed in preview resumeData  //({})create a state variable whose initial value is an empty object.
   const previewRef = useRef() //to take screenshot
   /* console.log(id); */
   useEffect(()=>{
    getResumeDetails()
   },[])


   const getResumeDetails=async()=>{
     const res = await getResumeAPI(id)
     console.log(res);
     setResumeData(res.data)
     
   }
   const downloadPdf=async()=>{

   const previwTag = previewRef.current
    const canvas = await html2canvas(previwTag)//now it just draw to  a canvas
    /* const imgUrl = canvas.toDataURL('image/png') *///length of url is large use cloudinary - platform to upload image  gives short url
     //blob -binary file 
     canvas.toBlob(async(blob)=>{   //file-like object containing binary data.//its purpose is to take the image data from the canvas and turn it into something that can be uploaded as a file to Cloudinary.//Blob converts the image into binary so Cloudinary can identify it.
      const formdata = new FormData()//Create a form and put this image file inside it."
      formdata.append('file',blob)
      formdata.append("upload_preset","my_preset")


        const response = await fetch(
      "https://api.cloudinary.com/v1_1/ndsw6qhw/image/upload",
         {
           method: "POST",
           body: formdata
           }
         );

         console.log(response);
         
  const res = await response.json();

  console.log(res);
  const shortUrl = res.secure_url
  generatePdf(shortUrl)
      
     })   
    
   }

   const generatePdf = async(imgUrl)=>{

    const today = new Date();
    console.log(today);
    let timestamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
/*     console.log(timestamp);
 */    

     const pdf = new jsPDF()
     const  imgWidth = pdf.internal.pageSize.getWidth()                //to find image width
     const imgHeight = pdf.internal.pageSize.getHeight()
     pdf.addImage(imgUrl,'PNG',0,0,imgWidth,imgHeight)
    /*  pdf.save(`${resumeData.name}-resume.pdf`) */

    const downloadDetails={
      timestamp,resumeId:resumeData.id,resumeImg:imgUrl,jobRole:resumeData.jobTitle
    }

    const res =await addHistoryApi(downloadDetails)
    console.log(res);
    if(res.status == 201){
      pdf.save(`${resumeData.name}-resume.pdf`)
    }

   }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column m-5 p-5'>
      <div>
        <button className='btn text-danger'><i className="fa-solid fa-file-arrow-down fa-2xl" onClick={downloadPdf}></i></button>
        <Edit resumeData={resumeData} setResumeData={setResumeData}/> 
        <Link to={'/history'} className='text-success'><i className="fa-solid fa-clock-rotate-left fa-2xl"></i></Link>
        <Link to={'/form'} className='text-primary ms-3'><i className="fa-solid fa-backward fa-2xl"></i></Link>
      </div>
      <div className='m-5' ref={previewRef}>
        <Preview resumeData={resumeData}/>
      </div>
    </div>
  )
}

export default View



//resumeData        → state variable
//setResumeData     → function used to change it
//useState() is a React Hook used to create a state variable in a component.
//useState() lets a component store a value and change that value while the application is running.


//Re-render = React updates the UI because something changed.


//Use useState → when changing the value should update your React UI.

//Use useRef → when you need to access/remember a value or DOM element without triggering a re-render.

//npm i jspdf
//to download pdf

//canvas
 /*  ↓
Creates/draws the image

blob
  ↓
Converts the canvas image into file-like binary data

FormData
  ↓
Packages that file so it can be sent through HTTP */
//Blob = JavaScript object that holds binary data
//FormData = the package used to send that file and other fields to the server
//You should not put your Cloudinary API secret in React, because frontend code is visible to users.

//An unsigned upload preset allows your frontend to upload without exposing the API secret.