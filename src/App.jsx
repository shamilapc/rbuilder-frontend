import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import ResumeGen from './pages/ResumeGen'
import UserForm from './pages/UserForm'
import View from './pages/View'
import History from './pages/History'



function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/resume' element={<ResumeGen/>} />
        <Route path='/form' element={<UserForm/>} />
        <Route path='/resume/:id/view' element={<View/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
