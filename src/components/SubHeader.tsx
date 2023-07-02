import React, { ChangeEvent, useState } from 'react';
import '../style/subHeader.scss';
import { useQueryClient } from 'react-query';
import { searchMentors } from '../apis/main';
import useDebounce from '../hooks/useDebounce';

export default function SubHeader() {
  const [searchText, setSearchText] = useState<string>('');
  const queryClient = useQueryClient();
  const DEBOUNCING_TIME = 500;

  const handleSearch = useDebounce(async (text: string) => {
    const searchResults = await searchMentors(text);
    queryClient.setQueryData('mentors', searchResults);
    if (text === '') queryClient.invalidateQueries('mentors');
  }, DEBOUNCING_TIME);

  const onInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    await handleSearch(e.target.value);
  };

  return (
    <div className="sub-header-area">
      <div className="sub-header-container">
        <div className="menu-container">
          <span className="menu selected">멘토 찾기</span>
        </div>
        <div className="search-area">
          <img src="/images/search.svg" alt="돋보기" />
          <input onChange={onInputChange} value={searchText} type="text" placeholder="회사, 직무로 검색하기" />
        </div>
      </div>
    </div>
  );
}
