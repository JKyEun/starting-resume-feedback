import React from 'react';
import '../style/mainHeader.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function MainHeader() {
  const isLogin = useSelector((state: RootState) => state.isLogin.value);

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
            <span className="menu">내 이력서</span>
            <span className="menu selected">멘토링</span>
            <span className="menu">마이페이지</span>
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
