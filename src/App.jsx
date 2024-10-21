import React from 'react';
import Login from './forms/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ChooseRole from './Pages/ChooseRole';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Login/>}></Route> 
          <Route path="/role"element={<ChooseRole/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
