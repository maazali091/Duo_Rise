import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import VerticalNavbar from './Components/VerticalNavbar/VerticalNavbar'
import Home from './Pages/Home/Home'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='app'>
      <BrowserRouter >
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <VerticalNavbar isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* {isSidebarOpen && <div className='overlay' onClick={() => setIsSidebarOpen(false)}></div>} */}
      {isSidebarOpen ? <div className='overlay'> </div> : <></>}
    </div>
  )
}

export default App