import React, { ReactNode } from 'react';
import { FeedNarvigation } from '../narvigation/FeedNarvigation';
type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center bg-stone-50">
      <div className="w-full max-w-[700px] flex flex-col items-stretch bg-white">
        <FeedNarvigation />
        <div className="px-6 py-8 bg-blue-50 flex-1">{children}</div>
      </div>
    </div>
  );
};
