import React from 'react';
/*import Sidebar from '../Components/Sidebar/Sidebar';
import Header from '../Components/Header/Header';*/
import { Routes, Route } from 'react-router-dom';
import Random from '../Components/Random';
import AdminDashboard from '../Layout/AdminDashboard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    
        <Routes>
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<Random />} />
          <Route path="/pharmacy" element={<Random />} />
          <Route path="/patients" element={<Random />} />
          <Route path="/doctors" element={<Random />} />
        </Routes>
      
  );
};

export default AppRoutes;
