import React, { useRef, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { classArr, companyTypeList, getSpecificJob, mentoYearSelect, style, style2 } from '../../util/constant';
import { setMentorRegister, useAppDispatch } from '../../store';

export default function BasicInfo() {
  const [jobFolder, setJobFolder] = useState<any>('직군을 선택하세요');
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [specificJob, setSpecificJob] = useState<any>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const imgInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const name = useRef<HTMLInputElement>(null);
  const nickname = useRef<HTMLInputElement>(null);
  const company = useRef<HTMLInputElement>(null);
  const companyType = useRef<any>(null);
  const jobSpecific = useRef<any>(null);
  const year = useRef<any>(null);
  const bankName = useRef<HTMLInputElement>(null);
  const account = useRef<HTMLInputElement>(null);
  const accountName = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [imgUrl, setImgUrl] = useState<string>('');

  const sendFile = async () => {
    const formData = new FormData();
    const files = fileInput.current?.files as FileList;
    if (files.length > 0) {
      formData.append('resume', files[0]);
    }
    const res = await axios.post('http://43.201.17.248:8080/mentor/resume', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    console.log(res.data);
  };

  const sendImg = async () => {
    const formData = new FormData();
    const files = imgInput.current?.files as FileList;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }
    const res = await axios.post('http://43.201.17.248:8080/mentor/profile-image', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    setImgUrl(res.data.url);

    console.log(res.data);
  };

  const sendInfo = () => {
    const basicInfo = {
      name: name.current?.value,
      nickname: nickname.current?.value,
      company: company.current?.value,
      companyType: companyType.current?.props?.value?.label,
      job: jobFolder,
      subjob: jobSpecific.current?.props?.value?.label,
      year: year.current?.props?.value?.label,
      bank: bankName.current?.value,
      bankNumber: account.current?.value,
      bankOwner: accountName.current?.value,
    };

    dispatch(setMentorRegister(basicInfo));
  };

  return (
    <div className="basic-info">
      <div className="title">기본 정보</div>
      <div className="profile-img frame">
        <div>
          프로필 사진 <span>*</span>
        </div>
        <div className="img-wrap">
          <div className="black"></div>
          <img
            className="profile"
            src={
              imgInput.current?.files?.length === 0 || imgInput.current === null ? '/images/basic-img.svg' : `${imgUrl}`
            }
            alt="프로필 이미지"
          />
          <label className="input-btn" htmlFor="img-input">
            <img src="/images/edit.svg" alt="연필" />
          </label>
          <input onChange={sendImg} ref={imgInput} id="img-input" type="file" />
        </div>
      </div>
      <div className="name frame">
        <div>
          이름 <span>*</span> <span className="badge">멘티에게 공개되지 않습니다</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={name} type="text" />
        </div>
      </div>
      <div className="nickname frame">
        <div>
          닉네임 <span>*</span> <span className="badge">멘토링 시 노출되는 닉네임입니다</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={nickname} type="text" />
        </div>
      </div>
      <div className="company frame">
        <div>
          회사명 <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={company} type="text" />
        </div>
      </div>
      <div className="company frame">
        <div>
          기업 종류 <span>*</span>
        </div>
        <div>
          <Select
            onChange={sendInfo}
            ref={companyType}
            placeholder="기업 종류를 선택해주세요"
            styles={style2}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: { ...theme.colors, primary25: '#f4f4f5', primary: '#f4f4f5', primary50: '#f4f4f5' },
            })}
            className="company-type"
            options={companyTypeList}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="job frame">
        <div>
          직업 <span>*</span>
        </div>
        <div>
          <Select
            onChange={(el: any) => {
              setDisabled(false);
              setJobFolder(el?.value);
              setSpecificJob(getSpecificJob(el?.value));
              sendInfo();
            }}
            styles={style}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: { ...theme.colors, primary25: '#f4f4f5', primary: '#f4f4f5', primary50: '#f4f4f5' },
            })}
            value={{ value: jobFolder, label: jobFolder }}
            className="job-folder"
            options={classArr}
            isSearchable={false}
          />
          <Select
            onChange={sendInfo}
            ref={jobSpecific}
            placeholder="직무를 선택하세요"
            styles={style}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: { ...theme.colors, primary25: '#f4f4f5', primary: '#f4f4f5', primary50: '#f4f4f5' },
            })}
            className="job-specific"
            isDisabled={isDisabled}
            options={specificJob}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="year frame">
        <div>
          총 경력 기간 <span>*</span>
        </div>
        <div>
          <Select
            onChange={sendInfo}
            ref={year}
            placeholder="경력기간을 선택하세요"
            styles={style2}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: { ...theme.colors, primary25: '#f4f4f5', primary: '#f4f4f5', primary50: '#f4f4f5' },
            })}
            className="mentor-year"
            options={mentoYearSelect}
            isSearchable={false}
          />
        </div>
      </div>
      <div className="certificate frame">
        <div>
          증빙자료 <span>*</span>
          <span className="badge">첨부 가능 자료: 명함, 국민연금 가입증명서, 재직/경력증명서</span>
        </div>
        <div>
          <div className="explain">{fileName === '' ? '파일을 추가해주세요' : fileName}</div>
          <div className="filebox">
            <label htmlFor="certificate">파일추가</label>
            <input
              onChange={(e) => {
                setFileName(e.target.value);
                sendFile();
                sendInfo();
              }}
              ref={fileInput}
              type="file"
              id="certificate"
            />
          </div>
        </div>
      </div>
      <div className="account frame">
        <div>
          <div>
            은행명 <span>*</span>
          </div>
          <div>
            <input onChange={sendInfo} ref={bankName} placeholder="00은행" type="text" />
          </div>
        </div>
        <div>
          <div>
            계좌번호 <span>*</span>
          </div>
          <div>
            <input onChange={sendInfo} ref={account} type="text" />
          </div>
        </div>
        <div>
          <div>
            예금주 <span>*</span>
          </div>
          <div>
            <input onChange={sendInfo} ref={accountName} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
