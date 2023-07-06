import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { classArr, companyTypeList, getSpecificJob, mentoYearSelect, style, style2 } from '../../util/constant';
import { setMentorRegister, useAppDispatch } from '../../store';
import { changeMentorFile, changeMentorImg } from '../../apis/register';

export default function BasicInfo() {
  const [jobFolder, setJobFolder] = useState<any>('직군을 선택하세요');
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [specificJob, setSpecificJob] = useState<any>(null);
  const [subjob, setSubjob] = useState<string>('직무를 선택하세요');
  const fileInput = useRef<HTMLInputElement>(null);
  const imgInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const name = useRef<HTMLInputElement>(null);
  const nickname = useRef<HTMLInputElement>(null);
  const company = useRef<HTMLInputElement>(null);
  const companyType = useRef<any>(null);
  const year = useRef<any>(null);
  const bankName = useRef<HTMLInputElement>(null);
  const account = useRef<HTMLInputElement>(null);
  const accountName = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [imgUrl, setImgUrl] = useState<string>('');
  const mentorInfo = localStorage.getItem('MENTOR_REGISTER_INFO');
  const parsedMentorInfo = mentorInfo && JSON.parse(mentorInfo);

  const sendFile = async () => {
    const formData = new FormData();
    const files = fileInput.current?.files as FileList;
    if (files.length > 0) {
      formData.append('resume', files[0]);
    }

    await changeMentorFile(formData);
  };

  const sendImg = async () => {
    const formData = new FormData();
    const files = imgInput.current?.files as FileList;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    const res = await changeMentorImg(formData);
    setImgUrl(res.url);
  };

  const sendInfo = () => {
    const basicInfo = {
      name: name.current?.value,
      nickname: nickname.current?.value,
      company: company.current?.value,
      companyType: companyType.current?.props?.value?.label,
      job: jobFolder,
      subjob,
      year: year.current?.props?.value?.label,
      bank: bankName.current?.value,
      bankNumber: account.current?.value,
      bankOwner: accountName.current?.value,
    };

    dispatch(setMentorRegister(basicInfo));
  };

  const sendJobFolder = (jobFolder: string) => {
    const jobFolderInfo = {
      job: jobFolder,
    };
    dispatch(setMentorRegister(jobFolderInfo));
  };

  useEffect(() => {
    if (parsedMentorInfo) {
      if (name.current) name.current.value = parsedMentorInfo.name;
      if (nickname.current) nickname.current.value = parsedMentorInfo.nickname;
      if (company.current) company.current.value = parsedMentorInfo.company;
      if (bankName.current) bankName.current.value = parsedMentorInfo.bank;
      if (account.current) account.current.value = parsedMentorInfo.bankNumber;
      if (accountName.current) accountName.current.value = parsedMentorInfo.bankOwner;
      if (parsedMentorInfo.job !== '직군을 선택하세요' && parsedMentorInfo.job !== '') {
        setDisabled(false);
        setJobFolder(parsedMentorInfo.job);
        setSpecificJob(getSpecificJob(parsedMentorInfo.job));
      }
      if (parsedMentorInfo.subjob !== '직무를 선택하세요' && parsedMentorInfo.subjob !== '')
        setSubjob(parsedMentorInfo.subjob);

      sendInfo();
    }
  }, []);

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
          <input onChange={sendImg} ref={imgInput} id="img-input" accept="image/*" type="file" />
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
            onBlur={sendInfo}
            ref={companyType}
            placeholder="기업 종류를 선택해주세요"
            styles={style2}
            defaultValue={
              parsedMentorInfo &&
              companyTypeList.filter(
                (el: { value: string; label: string }) => el.value === parsedMentorInfo.companyType
              )[0]
            }
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
              setSubjob('직무를 선택하세요');
              sendJobFolder(el?.value);
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
            onBlur={sendInfo}
            onChange={(el: any) => {
              setSubjob(el?.value);
            }}
            styles={style}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              colors: { ...theme.colors, primary25: '#f4f4f5', primary: '#f4f4f5', primary50: '#f4f4f5' },
            })}
            value={{ value: subjob, label: subjob }}
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
            onBlur={sendInfo}
            ref={year}
            placeholder="경력기간을 선택하세요"
            styles={style2}
            defaultValue={
              parsedMentorInfo &&
              mentoYearSelect.filter((el: { value: string; label: string }) => el.value === parsedMentorInfo.year)[0]
            }
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
