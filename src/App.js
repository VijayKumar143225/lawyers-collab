import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LawyerLogin from './Components/LawyerLogin';
import ConsumerLogin from './Components/ConsumerLogin';
import LawyerLoginRegister from './Components/LawyerLoginRegister';
import ConsumerLoginRegister from './Components/ConsumerLoginRegister';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/lawyer-login" element={<LawyerLogin title="Lawyer Login" />} />
        <Route path="/consumer-login" element={<ConsumerLogin title="Consumer Login" />} />
        <Route path="/lawyer-register" element={<LawyerLoginRegister title="Lawyer Register Page" />} />
        <Route path="/consumer-register" element={<ConsumerLoginRegister title="Consumer Register Page" />} />
      </Routes>
    </Router>
  );
}

export default App;
