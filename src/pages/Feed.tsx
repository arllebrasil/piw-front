import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { TimeLine } from '../components/timeline/TimeLine';

type FeedProps = {
};

export const FeedPage: React.FC<FeedProps> = ({ }) => {
  return (
    <MainLayout>
      <div className=" px-1 sm:px-3 md:px-4 bg-blue-50 flex-1">
        <TimeLine />
      </div>
    </MainLayout>
  );
};
