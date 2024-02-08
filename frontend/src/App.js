import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/termsofservice' element={<TermsOfService />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      <Footer />
          </>
  )
}

export default App
