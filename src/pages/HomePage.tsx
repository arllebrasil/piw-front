import React from 'react';
import { HomeLayout } from '../components/layout/HomeLayout';
import { MainLayout } from '../components/layout/MainLayout';

export const HomePage: React.FC<{}> = ({}) => {
  return (
    <HomeLayout>
        <div className=" px-1 sm:px-3 md:px-4 bg-blue-50 flex-1">
        <h1>Home Page</h1>
        </div>
    </HomeLayout>
  );
};
