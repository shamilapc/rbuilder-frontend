import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from '../assets/jobRole.json';
import jobSkills from '../assets/jobSkills.json';
import jobSummary from '../assets/summaries.json';
import { addResumeApi } from '../api/allApi';
import { useNavigate, useParams } from 'react-router-dom';


const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Review & Submit'];


function Steps({resumeData,setResumeData}) {
  const [activeStep, setActiveStep] = React.useState(0);

const navigate = useNavigate()


 

  console.log(resumeData);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const generateAI = () => {
    setResumeData({
      ...resumeData,
      skills: jobSkills[resumeData.jobTitle],
      summary: jobSummary[resumeData.jobTitle],

    })
    handleNext()
  }
  const addResume = async () => {
    const { name, jobTitle, location, email, phone, github, linkedin, degree, university, passout, skills, summary } = resumeData  //
    if (name && jobTitle && location && email && phone && github && linkedin && degree && university && passout && skills?.length && summary) {
      const res = await addResumeApi(resumeData)
      console.log(res);
      if (res.status == 201) {
        alert("Resume Added Successfully")
        navigate(`/resume/${res.data.id}/view`)
      }
    }
    else {
      alert("enter the fields completely")
    }
  }
  const handleReset = () => {
    setActiveStep(0);
  };
  //render contents corresponding to array index
  const viewStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
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
      )
      case 1: return (
        <div>
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
      )
      case 2: return (
        <div>
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
      )
      case 3: return (
        <div>
          <h3>Skills</h3>
          <div>
            <p>Our AI will generate skills & summary according to your job role. Click the <span style={{ fontWeight: 'bold' }}>AI SKILL & SUMMARY</span>button to proceed.</p>
          </div>

        </div>
      )
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={addResume}>Finish</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of steps */}
          <Box>
            {viewStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {
              activeStep === steps.length - 1 ?
                <Button onClick={generateAI}>Generate AI Skills & Summary</Button>
                :
                <Button onClick={handleNext}>NEXT</Button>

            }

          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps