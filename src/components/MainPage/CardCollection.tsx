import React from 'react';
import { useQuery } from 'react-query';
import MentorCard from './MentorCard';
import '../../style/cardCollection.scss';
import { getMentors } from '../../apis/main';
import Loading from '../Loading';

export default function CardCollection() {
  const { data, isLoading } = useQuery('mentors', getMentors);

  if (isLoading) return <Loading />;

  return (
    <div className="card-collection">
      <div className="inner">
        {data.map((el: any) => (
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
