import React, { useRef, useState } from 'react';
import '../style/mentoringApplyPage.scss';
import axios from 'axios';
import { useParams } from 'react-router';

export default function MentoringApplyPage() {
  const [moreLink, setMoreLink] = useState<number[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const phone = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const [url, setUrl] = useState<string[]>([]);

  const onUrlChange = (e: any, idx: any) => {
    url[idx] = e.target.value;
    setUrl(url);
  };

  const convertModal = () => {
    setModalOpen((cur) => !cur);
  };

  const sendEmail = async () => {
    setModalOpen((cur) => !cur);

    const requestForm = {
      phone: phone.current?.value,
      email: email.current?.value,
      url,
      content: content.current?.value,
      schedules: [],
    };

    try {
      const res = await axios.post(`http://43.201.17.248:8080/mentoring/${id}`, requestForm, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        },
      });

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page">
      <div className="apply-inner">
        <div className="apply-page">
          <div className="apply-title">멘토링 신청</div>
          <div className="available">
            <div>
              가능한 일정을 선택해 주세요 <span>*</span>
            </div>
            <div className="time-picker">
              <div>
                <span className="day">월</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">화</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">수</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">목</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">금</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">토</span>
                <span>18:00</span>
              </div>
              <div>
                <span className="day">일</span>
                <span>18:00</span>
              </div>
            </div>
          </div>
          <div className="phone">
            <div>
              연락 가능한 연락처 <span>*</span>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="email">
            <div>
              연락 가능한 이메일 <span>*</span>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="url">
            <div>
              스타팅 이력서 URL <span>*</span>
            </div>
            <div>
              <input onChange={(e) => onUrlChange(e, 0)} type="text" />
            </div>
            {moreLink.map((el, idx) => (
              <div key={el} className="more-link">
                <input
                  onChange={(e) => onUrlChange(e, idx + 1)}
                  value={url[idx + 1]}
                  placeholder="관련 링크를 입력해주세요"
                  type="text"
                />
                <input placeholder="링크를 소개해주세요" type="text" />
                <div
                  onClick={() => {
                    const newArr = moreLink.filter((filterEl) => filterEl !== el);
                    setMoreLink(newArr);
                    const newArr2 = url.filter((urlEl) => urlEl !== url[idx + 1]);
                    setUrl(newArr2);
                  }}>
                  <img src="/images/cancel.svg" alt="삭제" />
                </div>
              </div>
            ))}
            <div>
              <div
                onClick={() => {
                  setMoreLink((cur) => [...cur, Number(new Date())]);
                }}
                className="add">
                <img src="/images/plus.svg" alt="더하기" />
                <span>URL 추가</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div>
              멘토링 받고 싶은 내용 <span>*</span>
            </div>
            <div>
              <textarea></textarea>
            </div>
          </div>
          <div onClick={convertModal} className="pay">
            결제하기
          </div>
          {isModalOpen && (
            <>
              <div
                onClick={(e) => {
                  if (!modalRef.current?.contains(e.target as HTMLElement)) {
                    convertModal();
                  }
                }}
                className="modal-background"></div>
              <div ref={modalRef} className="pay-modal">
                <div className="modal-title">결제하기</div>
                <div className="explain1">
                  휴대폰으로 스캔하면 결제 화면으로 이동합니다.
                  <br />
                  송금 후 결제완료를 눌러주세요.
                </div>
                <div className="explain2">
                  스마트폰 카메라 및 모든 QR스캐너로 가능
                  <br />
                  결제 QR은 마이 멘토링에서 재확인 가능
                </div>
                <div className="QR"></div>
                <div className="price">00,000원</div>
                <div className="btns">
                  <div onClick={convertModal} className="close">
                    결제취소
                  </div>
                  <div onClick={sendEmail} className="complete">
                    결제완료
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
