import React from 'react';
import { useQuery } from 'react-query';
import MentorCard from './MentorCard';
import '../../style/cardCollection.scss';
import { getMentors } from '../../apis/main';
import Loading from '../Loading';
import { useAppSelector } from '../../store';

export default function CardCollection() {
  const { data, isLoading } = useQuery('mentors', getMentors);
  const filter = useAppSelector((state) => state.filter);
  let filteredData = [];

  console.log(data);
  console.log(filter);

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
            key={el.mentor.name + el.content}
            content={el.content}
            name={el.mentor.name}
            company={el.mentor.company.name}
            job={el.mentor.subjob.name}
            year={el.mentor.year}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
}
