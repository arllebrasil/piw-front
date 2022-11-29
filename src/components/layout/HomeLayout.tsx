import React, { ReactNode } from 'react';
import { HomeNarvigation } from '../narvigation/HomeNavigation';
type HomeLayoutProps = {
  children: ReactNode;
};

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center bg-stone-50">
      <div className="w-full max-w-[700px] flex flex-col items-stretch bg-white">
        <HomeNarvigation />
        {children}
      </div>
    </div>
  );
};
