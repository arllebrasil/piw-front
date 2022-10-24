import React from 'react';
import { Narvigation } from '../components/narvigation/Narvigation';
import { TimeLine } from '../components/time-line/TimeLine';

type FeedProps = {
  title: string;
};

export const FeedPage: React.FC<FeedProps> = ({ title }) => {
  return (
    <div className="w-screen h-screen flex justify-center bg-stone-50">
      <div className="w-full max-w-[700px] flex flex-col items-stretch bg-white">
        <Narvigation />
        <div className="px-6 py-8 bg-blue-50 flex-1">
          <TimeLine />
        </div>
      </div>
    </div>
  );
};
