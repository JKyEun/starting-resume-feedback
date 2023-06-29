import React from 'react';
import { useQuery } from 'react-query';
import MentorCard from './MentorCard';
import '../../style/cardCollection.scss';
import { getMentors } from '../../apis/main';
import Loading from '../Loading';
import { useAppSelector } from '../../store';

export default function CardCollection() {
  const filter = useAppSelector((state) => state.filter);
  let filteredData: [] = [];

  const { data, isLoading, isError } = useQuery('mentors', getMentors);

  console.log(data);

  if (isLoading || isError) return <Loading />;

  if (filter.job.length !== 0) {
    filteredData = data.filter((el: any) => filter.job.includes(el.mentor.subjob.name));
  } else if (filter.companyType.length !== 0) {
    filteredData = data.filter((el: any) => filter.companyType.includes(el.mentor.company.companyType.name));
  } else {
    filteredData = data;
  }

  return (
    <div className="card-collection">
      <div className="inner">
        {filteredData.map((el: any, idx: number) => (
          <MentorCard
            key={el.mentor.name + el.content + el.mentor.nickname}
            content={el.title}
            nickname={el.mentor.nickname}
            company={el.mentor.company?.name}
            job={el.mentor.subjob?.name}
            year={el.mentor.year?.name}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
}
