import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from "./components/home/Home";
import { Login } from "./components/user/Login";
import { Signup } from "./components/user/Signup";
import { ForgotPassword } from "./components/user/ForgotPassword";
import { AdminDashboard } from "./components/admin/AdminDashboard";

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
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
