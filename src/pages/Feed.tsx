import React from 'react';
import { TimeLine } from '../components/timeline/TimeLine';

type FeedProps = {
  title: string;
};

export const FeedPage: React.FC<FeedProps> = ({ title }) => {
  return (
    <div className=" px-1 sm:px-3 md:px-4 bg-blue-50 flex-1">
      <TimeLine />
    </div>
  );
};
