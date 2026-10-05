import { Box, Divider } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
function Preview({resumeData}) {
  console.log(resumeData);
  
  return (
    <Box>
      <Paper elevation={3} sx={{textAlign:'center',padding:'20px'}}>
         <h2>{resumeData?.name}</h2>
         <h3>{resumeData?.jobTitle}</h3>
         <p>
          <span>{resumeData?.location}</span> || <span>{resumeData?.email}</span> || <span>{resumeData?.phone}</span>
         </p>
         <p><Link>{resumeData?.linkedin}</Link> | <Link>{resumeData?.github}</Link></p>
         <h4 className='text-center'>SUMMARY</h4>
         <Divider  sx={{borderColor:'black'}}></Divider>
         <p className='mt-2'>{resumeData?.summary}</p>
         <h4 className='text-center'>SKILLS</h4>
         
         <Divider  sx={{borderColor:'black'}}></Divider>
         {
          resumeData?.skills?.map(sk=>(
            <button className='btn border m-2'>{sk}</button>
          ))
         }
         <button className='btn'>react</button>
         <h4 className='text-center'>EDUCATION</h4>
         <Divider sx={{borderColor:'black'}}></Divider>
          <h3 className='text-center'>{resumeData?.degree}</h3>
          <p>{resumeData?.university} || {resumeData?.passout}</p>
      </Paper>

    </Box>
  )
}

export default Preview