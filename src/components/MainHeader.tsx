import React, { useState } from 'react';
import '../style/mainHeader.scss';
import { Link, useNavigate } from 'react-router-dom';
import { logout, useAppDispatch, useAppSelector } from '../store';

export default function MainHeader() {
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [curMenu, setCurMenu] = useState('멘토링');

  const logoutInHeader = () => {
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('JWT_TOKEN');
    navigate('/');
    dispatch(logout());
    setCurMenu('멘토링');
  };

  return (
    <div className="header-area">
      <div className="header-container">
        <a href="/">
          <div className="img-container">
            <img src="/images/starting-logo-color.svg" alt="스타팅 로고" />
          </div>
        </a>
        {isLogin ? (
          <div className="menu-container">
            <a href="https://start-ing.kr/" className={curMenu === '내 이력서' ? 'menu selected' : 'menu'}>
              내 이력서
            </a>
            <span
              onClick={() => {
                navigate('/');
                setCurMenu('멘토링');
              }}
              className={curMenu === '멘토링' ? 'menu selected' : 'menu'}>
              멘토링
            </span>
            <span
              onClick={() => {
                navigate('/registor');
                setCurMenu('멘토 지원');
              }}
              className={curMenu === '멘토 지원' ? 'menu selected' : 'menu'}>
              멘토 지원
            </span>
            <span onClick={logoutInHeader} className="menu">
              로그아웃
            </span>
          </div>
        ) : (
          <Link to="/login">
            <div className="login-btn">로그인 ∙ 회원가입</div>
          </Link>
        )}
      </div>
    </div>
  );
}
