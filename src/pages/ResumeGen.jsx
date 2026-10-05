import React from 'react'
import { IoDocument } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGen() {
  return (
    <div className='container-fluid'>
      <h2 className='mt-5 text-center'>Creates a Job Winning Resume in Minutes</h2>
      <div style={{height:'80vh'}} className='row justify-content-center align-items-center'>
        <div className="col-4 text-center border shadow p-5">
          <IoDocument className='fs-2 text-primary'/>
          <h5>Add Your Information</h5>
          <p>Add pre-written examples to each sections</p>
          <h5>STEP 1</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-4 text-center border shadow p-5">
          <FaFileDownload className='fs-2 text-danger'/>
          <h5>Download Your Resume</h5>
          <p>Download and start applying</p>
          <h5>STEP 2</h5>
        </div>
      </div>
      <div className="text-center mb-5">
      <Link className='btn text-light' style={{backgroundColor:"purple"}} to={'/form'}>LET'S START</Link>
      </div>
    </div>
  )
}

export default ResumeGen