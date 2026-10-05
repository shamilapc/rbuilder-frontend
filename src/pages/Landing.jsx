import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <section id="part1">
        <div className="row " style={{paddingTop:'200px'}}>
          <div className="col-12 col-md-4 "> </div>
          <div className="col-12 col-md-4 box border py-5 rounded my-5 text-center  " style={{ backgroundColor: 'rgb(225,225,225,0.5)' }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job- all in one.</h4>
            <Link className='btn btn-dark text-light' to={'/resume'}>Make Your Resume</Link>
          </div>
          <div className="col-12 col-md-4"> </div>
        </div>
      </section>
      <section id="part2" className='p-5'>
        <h1 className='text-center'>Tools</h1>
        <div className="row m-4 align-items-center">
          <div className="col-lg-6">
            <h3>Resume</h3>
            <p>Create Unlimited resumes and easily edit them afterwards.</p>

            <h3>Cover Letters</h3>
            <p>Easily write proffessional cover letters.</p>
            <h3>Jobs</h3>
            <p>Automatically recieve new and relevant job postings.</p>
            <h3>Applications</h3>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>

          </div>
          <div className="col-lg-6 py-5 ">
            <img src="https://tse3.mm.bing.net/th/id/OIP.clwYJqGA-azXSpyxdpT0twHaHX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" 
              className='image-fluid' />
          </div>
        </div>
      </section>
      <section style={{height:'700px',backgroundImage:"url('https://media.istockphoto.com/id/2213852931/photo/happy-black-man-talking-to-his-female-colleagues-in-the-office.jpg?s=612x612&w=0&k=20&c=KxwNaEeGORePXWZ9bbEVEiZGvVphT4TqHl-JS14OiKw=')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>

      </section>
    </>
  )
}

export default Landing