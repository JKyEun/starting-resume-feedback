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

  const { data, isLoading } = useQuery('mentors', getMentors);

  console.log(data);

  if (isLoading) return <Loading />;

  if (filter.job.length !== 0) {
    filteredData = data.filter((el: any) => filter.job.includes(el.mentor.subjob.name));
  } else if (filter.companySize.length !== 0) {
    filteredData = data.filter((el: any) => filter.companySize.includes(el.mentor.company.companySize.name));
  } else {
    filteredData = data;
  }

  return (
    <div className="card-collection">
      <div className="inner">
        {filteredData.map((el: any) => (
          <MentorCard
            key={el.mentor.name + el.content + el.mentor.nickname}
            content={el.content}
            nickname={el.mentor.nickname}
            company={el.mentor.company.name}
            job={el.mentor.subjob.name}
            year={el.mentor.year.name}
          />
        ))}
      </div>
    </div>
  );
}
