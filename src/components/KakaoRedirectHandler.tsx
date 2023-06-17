import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GRANT_TYPE, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from '../util/constant';
import { LoginInfo } from '../types/user';
import { kakaoLogin } from '../apis/user';
import Loading from './Loading';
import { login, useAppDispatch } from '../store';

export default function KakaoRedirectHandler() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const CODE = new URL(window.location.href).searchParams.get('code');

    async function loginFetch() {
      const tokenResponse = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${CODE}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );

      if (tokenResponse.status === 200) {
        const tokenData = await tokenResponse.json();
        const userResponese = await fetch(`https://kapi.kakao.com/v2/user/me`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });

        if (userResponese.status === 200) {
          const userKaKaoInfo = await userResponese.json();

          const userLoginInfo: LoginInfo = {
            name: userKaKaoInfo.kakao_account.profile.nickname,
            uuid: userKaKaoInfo.id,
          };

          const registerResponse = await kakaoLogin(userLoginInfo);

          if (registerResponse?.status === 200) {
            localStorage.setItem('JWT_TOKEN', registerResponse.data.token);
            localStorage.setItem('USER_ID', userKaKaoInfo.id);
            navigate('/');
            dispatch(login());
          } else {
            alert('회원 등록 이상');
            navigate('/login');
          }
        } else {
          alert('카카오 로그인 회원 정보 획득 실패');
          navigate('/login');
        }
      } else {
        alert('카카오 로그인 토큰 발행 실패');
        navigate('/login');
      }
    }
    loginFetch();
  });

  return <Loading />;
}
