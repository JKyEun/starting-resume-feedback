import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import MainHeader from './components/MainHeader';
import SubHeader from './components/SubHeader';
import SignInPage from './pages/SignInPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <MainHeader />}
      {location.pathname !== '/login' && <SubHeader />}
      <Routes>
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
