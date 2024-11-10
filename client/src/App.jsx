import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from "./components/home/Home";
import { Login } from "./components/user/Login";
import { Signup } from "./components/user/Signup";
import { ForgotPassword } from "./components/user/ForgotPassword";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { DoctorDashboard } from "./components/doctor/DoctorDashboard";
import { Appointment } from "./components/appointment/Appointment";
import { UserDashboard } from "./components/user/UserDashboard/UserDashboard";
import { AppointmentDetail } from "./components/appointment/AppointmentDetail";
import { DoctorLogin } from "./components/doctor/DoctorLogin";

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/appointment-detail' element={<AppointmentDetail />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/doctor-login' element={<DoctorLogin />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
