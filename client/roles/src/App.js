import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarpart from './components/Navbarpart';
import Headerpart from './components/Headerpart';
import Createrolespage from './pages/Createrolespage';
import RoleOverview from './pages/Roleslist';
import Roleslist from './pages/RoleOverview';

function App() {
  return (
    <Router>
      <div>
        <Headerpart />
        <Navbarpart />
        <Routes>
          <Route path="/" element={<Createrolespage />} />
          <Route path="/2" element={<RoleOverview />} />
          <Route path="/3" element={<Roleslist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
