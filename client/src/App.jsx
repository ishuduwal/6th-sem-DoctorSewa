import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from "./components/home/Home";
import { About } from "./components/home/About";
import { Contact } from "./components/home/Contact";

function App() {

  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
