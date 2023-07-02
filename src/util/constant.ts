export const GRANT_TYPE = 'authorization_code';
export const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
export const KAKAO_REDIRECT_URI = window.location.origin.includes('localhost')
  ? 'http://localhost:3000/oauth/callback/kakao'
  : 'http://43.201.17.248:3000/oauth/callback/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const companyClass = ['사기업', '공기업', '스타트업', '외국계', '기타'];
export const orderList = ['최신순', '평점순', '응답순', '연차순', '팔로워순'];
export const jobClass = [
  {
    class: '경영·기획',
    job: [
      '전략·경영',
      '사무·총무·법무',
      '인사·노무',
      '경리·회계',
      '재무·세무·IR',
      '사무보조',
      '웹 기획',
      '앱 기획',
      '웹서비스 기획',
      '앱서비스 기획',
      'PM·PO',
      'HR·경영지원',
      '비서',
      '기타',
    ],
  },
  {
    class: '마케팅·광고',
    job: [
      '마케팅기획',
      '광고기획',
      '홍보기획',
      '소셜 마케팅',
      '브랜드 마케팅',
      '바이럴 마케팅',
      '콘텐츠 마케팅',
      '퍼포먼스 마케팅',
      '그로스 마케팅',
      'AE',
      'CRM',
      '기타',
    ],
  },
  {
    class: 'IT·인터넷',
    job: [
      '서버·백엔드',
      '프론트엔드',
      '풀스택',
      'Android',
      'IOS',
      'DBA',
      '보안',
      '시스템·네트워크',
      '게임 클라이언트',
      'HW·임베디드',
      '데이터 사이언스',
      '퍼블리싱',
      'AI·ML',
      'DevOps',
      '기타',
    ],
  },
  {
    class: '디자인',
    job: [
      'UI/UX',
      '브랜드 디자인',
      '그래픽 디자인',
      '캐릭터·애니메이션',
      '광고·시각 디자인',
      '패션 디자인',
      '전시·공간 디자인',
      '출판·편집 디자인',
      '제품·산업 디자인',
      '모션 디자인',
      '타이포그래피',
      '기타',
    ],
  },
  {
    class: '무역·유통',
    job: ['해외영업·무역영업', '수출입·무역사무', '구매·자재', '상품기획·MD', '유통·물류', '배송·택배·운송', '기타'],
  },
  {
    class: '영업·고객상담',
    job: [
      '제품·서비스 영업',
      '금융·보험 영업',
      'IT·솔루션·기술 영업',
      '영업관리·지원',
      '광고 영업',
      '법인 영업',
      '판매·서빙·매장관리',
      'TM',
      'CS',
      'CX',
      '기타',
    ],
  },
  {
    class: '서비스',
    job: [
      '요리·제과제빵·바리스타',
      '설치·정비·A/S',
      '시설·보안·경비',
      '레저·스포츠',
      '여행·항공·숙박',
      '뷰티·미용',
      '애완',
      '주차',
      '세차·주유',
      '청소·가사·육아',
      '기타',
    ],
  },
  {
    class: '연구개발·설계',
    job: [
      '자동차·조선·기계',
      '반도체·디스플레이',
      '화학·에너지·환경',
      '전기·전자·제어',
      '기계설비·CAD·CAM',
      '통신기술·네트워크구축',
      '바이오·제약·식품',
      '기타',
    ],
  },
  {
    class: '생산·제조',
    job: ['생산관리', '공정관리', '품질관리', '생산·제조', '설비·조립', '포장·가공', '섬유·의류·패션', '기타'],
  },
  {
    class: '교육',
    job: [
      '유치원·보육교사',
      '초중고·특수학교',
      '대학교수·강사·행정직',
      '보습학원·입시학원',
      '학원상담·관리·운영',
      '학습지·과외·방문교사',
      '외국어교육',
      '자격증·기술·전문교육',
      '교재기획·교수설계',
      '기타',
    ],
  },
  {
    class: '의료',
    job: [
      '의사',
      '치과',
      '한의사',
      '약사',
      '한약사',
      '약무보조',
      '간호사',
      '간호조무사',
      '의료기사',
      '사무·원무·코디',
      '수의사·수의간호',
      '기타',
    ],
  },
  {
    class: '미디어',
    job: [
      '감독·연출·PD',
      '영상·사진·촬영',
      '광고제작·카피·CF',
      '아나운서·리포터',
      '성우',
      '기자',
      '작가',
      '연예·엔터테인먼트',
      '인쇄·출판·편집',
      '영화·배급',
      '음악·음향',
      '공연·전시',
      '무대·스텝',
      '기타',
    ],
  },
  {
    class: '전문·특수직',
    job: [
      '경영분석·컨설턴트',
      '채권·심사',
      '보험·보상',
      '회계·세무·CPA',
      '노무·헤드헌터',
      '직업상담',
      '통계·설문',
      '도서관 사서',
      '법률·특허·상표',
      '번역·통역',
      '보안·경호',
      '사회복지·요양보호',
      '자원봉사',
      '연구소·R&D',
      '기타',
    ],
  },
];

export const classArr: any = [];
for (let i = 0; i < jobClass.length; i++) {
  const data = { value: jobClass[i].class, label: jobClass[i].class };
  classArr.push(data);
}

export function getSpecificJob(cla: string): object[] {
  const data = [];
  const arr = jobClass.filter((el) => el.class === cla)[0]?.job;
  for (let i = 0; i < arr.length; i++) {
    data.push({ value: arr[i], label: arr[i] });
  }

  return data;
}

export const mentoYearSelect = [
  { value: '주니어 (1~4)', label: '주니어 (1~4)' },
  { value: '미들 (5~8)', label: '미들 (5~8)' },
  { value: '시니어 (8~12)', label: '시니어 (8~12)' },
  { value: '엑스퍼트 (13~)', label: '엑스퍼트 (13~)' },
];

export const companyTypeList = [
  { value: '사기업', label: '사기업' },
  { value: '공기업', label: '공기업' },
  { value: '스타트업', label: '스타트업' },
  { value: '외국계', label: '외국계' },
  { value: '기타', label: '기타' },
];

export const style = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderColor: '#e1e2e4',
    outline: 'none',
    width: '348px',
    height: '48px',
    padding: '3px 0px 0px 5px',
  }),
  option: (styles: any, { isSelected }: { isSelected: boolean }) => ({
    ...styles,
    color: isSelected ? 'black' : 'black',
  }),
};

export const style2 = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderColor: '#e1e2e4',
    outline: 'none',
    width: '100%',
    height: '48px',
    padding: '3px 0px 0px 5px',
  }),
  option: (styles: any, { isSelected }: { isSelected: boolean }) => ({
    ...styles,
    color: isSelected ? 'black' : 'black',
  }),
};

export const TOKEN = localStorage.getItem('JWT_TOKEN');
export const USER_ID = localStorage.getItem('USER_ID');
