import React, { useState } from 'react'
import Preview from '../components/Preview'
import Steps from '../components/Steps'

function UserForm() {
   const [resumeData, setResumeData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    degree: "",
    university: "",
    passout: "",
    skills: [],
    summary: ""
  })
  return (
    <div className='row mx-4 my-5'>
      <div className="col-lg-6">
        <Steps resumeData={resumeData} setResumeData={setResumeData}/>
      </div>
      <div className="col-lg-6">
       { 
       resumeData?.name && <Preview resumeData={resumeData} />
       }
      </div>
    </div>
  )
}

export default UserForm



//to share data between cmponents : javascript support one way data sharing ie, parent to child not reverse
//to share data from parent to child call the child selector in parent and get it from the function of child through pros(deconstruct them)
//useState used to store data
//here steps&previe are sibilings so they cannot share data . so resumeData from step is defined here in useform and usestate is also called here they are called from the step and preview component