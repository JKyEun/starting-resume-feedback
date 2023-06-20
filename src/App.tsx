import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import MainHeader from './components/MainHeader';
import SubHeader from './components/SubHeader';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import MentorCard from './components/MentorCard';
import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import { login, useAppDispatch } from './store';
import CategoryFilter from './components/CategoryFilter';
import { companyClass } from './util/constant';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('JWT_TOKEN')) {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== '/login' && <MainHeader />}
      {location.pathname !== '/login' && <SubHeader />}
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      </Routes>
    </div>
  );
}

export default App;
