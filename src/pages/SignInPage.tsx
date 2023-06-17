import React from 'react';
import '../style/signInPage.scss';
import { Link } from 'react-router-dom';
import { KAKAO_AUTH_URL } from '../util/constant';

export default function SignInPage() {
  return (
    <div className="signin-page">
      <div className="explain-text">
        <div className="main-text">
          세상에 없던
          <br />
          이력서의 시작
        </div>
        <div className="sub-text">
          나를 잘 표현한 이력서,
          <br />
          지금 바로 작성해보세요
        </div>
      </div>
      <div className="login-wrap">
        <Link to={KAKAO_AUTH_URL} className="kakao-login-btn">
          <img src="/images/kakao-logo.svg" alt="카카오 로고" />
          <span>카카오로 3초만에 계속하기</span>
        </Link>
      </div>
    </div>
  );
}
