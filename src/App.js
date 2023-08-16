//import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Username from './pages/Username';
import Student from './pages/Student';
import Recepit from './pages/Recepit';
import Report from './pages/Report';
import Payment from './pages/Payment';
import AddStudent from './pages/AddStudent'
import LeftStudent from './pages/LeftStudent'
import PrepareRecepit from './pages/PrepareRecepit';
import ManageReason from './pages/ManageReason';
import VoidReport from './pages/VoidReport';
import ManagePayment from './pages/ManagePayment';
import InfoIcon from './pages/InfoIcon';
import './App.css';
//import Login from './authentication/Login';

function App() {
  

  return (
    <div className="app">
      <BrowserRouter>
       
            <div className='navbar'>
              <Navbar />
            </div>
            <div className="sidebar-container">
              <Sidebar />
              <div className="pages">
                <Routes>
                  <Route path="/" element={<Username />} />
                  <Route path="/students" element={<Student />} />
                  <Route path="/recepits" element={<Recepit />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/payments" element={<Payment />} />
                  <Route path="/add-student" element={<AddStudent />} />
                  <Route path="/left-student" element={<LeftStudent />} />
                  <Route path="/prepare-recepit" element={<PrepareRecepit />} />
                  <Route path="/manage-reason" element={<ManageReason />} />
                  <Route path="/void-report" element={<VoidReport />} />
                  <Route path="/manage-payment" element={<ManagePayment />} />
                  <Route path="/info-icon" element={<InfoIcon />} />
                </Routes>
              </div>
            </div>
         
      
       
      </BrowserRouter>
    </div>
  );
}

export default App;
