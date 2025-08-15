import { Routes, Route } from 'react-router-dom';
import Random from '../Components/Random';
import AdminDashboard from '../Layout/AdminDashboard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import PatientDashboard from '../Layout/PatientDashboard';
import PatientProfilePage from '../Pages/Patient/PatientProfilePage';

const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/" element={<ProtectedRoute><AdminDashboard />
</ProtectedRoute>} >

          <Route path="/dashboard" element={<Random />} />
          <Route path="/pharmacy" element={<Random />} />
          <Route path="/patients" element={<Random />} />
          <Route path="/doctors" element={<Random />} />
          </Route>
          <Route path="/patient" element={<ProtectedRoute><PatientDashboard />
</ProtectedRoute>} >
          <Route path="dashboard" element={<Random />} />
          <Route path="profile" element={<PatientProfilePage />} /> 
          <Route path="appointments" element={<Random />} />
          </Route>
        </Routes>
  );
};

export default AppRoutes;
