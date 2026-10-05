import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from '../assets/jobRole.json';
import { editResumeApi } from '../api/allApi';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:'auto',
};
function Edit({resumeData,setResumeData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef()  //{current}
  /* const addSkill=(skill)=>{
       if(skill){
          if(resumeData?.skills?.map(sk=>sk.toLowerCase().includes(skill.toLowerCase()))){
            alert("skill already added")
          }
          else{
            setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
          }
       }
       else{
         alert('enter a valid skill')
       }
       skillRef.current.value=""
  } */
const addSkill=(skill)=>{
console.log(skill);
if(skill){
if(resumeData.skills?.map(sk=>sk.toLowerCase()).includes(skill.toLowerCase())){
    alert("skill already added")
}
else{
    setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
}
skillRef.current.value=""
}
else{
    alert("enter a valid skill")
}
 }
 const removeSkills=(skill)=>{
      setResumeData({...resumeData,skills:resumeData.skills.filter(sk=>sk!=skill)})
 }
   const editResume = async () => {
     const { name, jobTitle, location, email, phone, github, linkedin, degree, university, passout, skills, summary } = resumeData
     if (name && jobTitle && location && email && phone && github && linkedin && degree && university && passout && skills?.length && summary) {
      
    const res = await editResumeApi(resumeData?.id,resumeData)
    console.log(res);
    if(res.status==200){
      handleClose()
    }
    
     }
     else {
       alert("enter the fields completely")
     }
   }
  return (
   <>
   <button className='btn text-warning' onClick={handleOpen}><i className="fa-solid fa-file-pen fa-2xl"></i></button>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {/* content */}
            <div>
                     <h3>Personal Details</h3>
                     <div>
                       <TextField value={resumeData.name} onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} id="standard-name" label="Full Name" variant="standard" className='w-100' />
                     </div>
                     <div>
                       <FormControl variant="standard" className='w-100'>
                         <InputLabel id="demo-simple-select-standard-label">Job Title</InputLabel>
                         <Select value={resumeData.jobTitle} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })}>
                           {
                             jobTypes.jobRoles.map(job => (
                               <MenuItem key={job} value={job}>{job}</MenuItem>
                             ))
                           }
           
                         </Select>
                       </FormControl>
                     </div>
                     <div>
                       <TextField value={resumeData.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} id="standard-loc" label="Location" variant="standard" className='w-100' />
                     </div>
                   </div>
             <div className='mt-3'>
                       
                                 <h3>Contact Details</h3>
                                 <div>
                                   <TextField value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} id="standard-email" label="Email" variant="standard" className='w-100' />
                                 </div>
                                 <div>
                                   <TextField value={resumeData.phone} onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-phn" label="Phone" variant="standard" className='w-100' />
                                 </div>
                                 <div>
                                   <TextField value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} id="standard-git" label="Github Link" variant="standard" className='w-100' />
                                 </div>
                                 <div>
                                   <TextField value={resumeData.linkedin} onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-lkdin" label="LinkedIn Link" variant="standard" className='w-100' />
                                 </div>
                               
             </div>
             <div className='mt-3'>
                        
                                 <h3>Educational Details</h3>
                                 <div>
                                   <TextField value={resumeData.degree} onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-dgr" label="Bachelor's Degree" variant="standard" className='w-100' />
                                 </div>
                                 <div>
                                   <TextField value={resumeData.university} onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })} id="standard-clg" label="College/University" variant="standard" className='w-100' />
                                 </div>
                                 <div>
                                   <TextField value={resumeData.passout} onChange={(e) => setResumeData({ ...resumeData, passout: e.target.value })} id="standard-yr" label="Passout Year" variant="standard" className='w-100' />
                                 </div>
                              
            </div>
             <div className='mt-3'>
            <h3>Skills</h3>
             <div className='d-flex align-items-center'>
                <input ref={skillRef} placeholder='enter skill' className='form-control' />
                <button className='btn btn-primary ms-2' onClick={()=>addSkill(skillRef.current.value)}>ADD</button>
             </div>
            <p className='fw-bold mt-3'>Add Skills:</p>
           {
             resumeData?.skills?.map(skills=>(
               <span className='btn btn-dark m-2'>{skills} <button className='btn text-light' onClick={()=>removeSkills(skills)}>x</button></span>
             ))
           }
        </div>
        <div className="mt-3">
            <h3>Professional Summary</h3>
            <div>
                 <TextField value={resumeData.summary} id="standard-summary"  multiline label="Summary" variant="standard" className='w-100'/>
             </div>
        </div>
        <button className='btn btn-primary w-100 mt-5' onClick={editResume}>UPDATE</button>
          </Typography>
        </Box>
      </Modal>
   </>
  )
}

export default Edit




//useRef() is a React Hook that lets you directly access an HTML element.