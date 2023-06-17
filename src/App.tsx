import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import MainHeader from './components/MainHeader';
import SubHeader from './components/SubHeader';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import MentorCard from './components/MentorCard';
import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import { login } from './store/isLoginSlice';
import { AppDispatch } from './store';

function App() {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

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
      <MentorCard />
    </div>
  );
}

export default App;
