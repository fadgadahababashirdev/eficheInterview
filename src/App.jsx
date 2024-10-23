import React from 'react';
import Login from './forms/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ChooseRole from './Pages/ChooseRole';

import Sidebar from './components/Sidebar';
import NurseDashboard from './Dashboard/NurseDashboard';
import NurseTable from './Dashboard/NurseTable';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Login/>}></Route> 
          <Route path="/role"element={<ChooseRole/>}></Route>
          <Route path="/Nurse"element={<NurseDashboard/>}></Route>
          <Route path='/Report' element={<NurseTable/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
