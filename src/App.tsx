import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import MainHeader from './components/MainHeader';
import SubHeader from './components/SubHeader';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import { login, useAppDispatch } from './store';
import MentorregisterPage from './pages/MentorRegisterPage';
import MentorDetailPage from './pages/MentorDetailPage';
import MentoringApplyPage from './pages/MentoringApplyPage';
import { TOKEN } from './util/constant';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (TOKEN) {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== '/login' && <MainHeader />}
      {location.pathname !== '/login' && location.pathname !== '/register' && <SubHeader />}
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MentorDetailPage />} />
        <Route path="/:id/apply" element={<MentoringApplyPage />} />
        <Route path="/register" element={<MentorregisterPage />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      </Routes>
    </div>
  );
}

export default App;
