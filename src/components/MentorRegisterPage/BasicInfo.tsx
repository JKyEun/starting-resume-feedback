import React from 'react';
import { jobClass } from '../../util/constant';

export default function BasicInfo() {
  return (
    <div className="basic-info">
      <div className="title">기본 정보</div>
      <div className="profile-img">
        <div>
          프로필 사진 <span>*</span>
        </div>
        <div>
          <img src="/images/basic-img.svg" alt="기본 이미지" />
        </div>
      </div>
      <div className="name">
        <div>
          이름 <span>*</span> <span className="badge">멘티에게 공개되지 않습니다</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="nickname">
        <div>
          닉네임 <span>*</span> <span className="badge">멘토링 시 노출되는 닉네임입니다</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="company">
        <div>
          회사명 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="job">
        <div>
          직업 <span>*</span>
        </div>
        <div>
          <select className="job-folder">
            {jobClass.map((el) => (
              <option value={el.class}>{el.class}</option>
            ))}
          </select>
          <select className="job-specific">
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="year">
        <div>
          총 경력 기간 <span>*</span>
        </div>
        <div>
          <select className="job-folder">
            {jobClass.map((el) => (
              <option value={el.class}>{el.class}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="certificate">
        <div>
          증빙자료 <span>*</span> <span className="badge">첨부 가능 자료: 국민연금 가입증명서, 재직/경력증명서</span>
        </div>
        <div>
          <button type="button">파일 추가</button>
        </div>
      </div>
      <div className="account">
        <div>
          <div>
            은행명 <span>*</span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            계좌번호 <span>*</span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            예금주 <span>*</span>
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
