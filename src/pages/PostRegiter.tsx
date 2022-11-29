import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { PostForm } from '../components/post-form/PostForm';

export const PostRegister = () => {
  return (
    <MainLayout>
      <div className="px-6 py-8 bg-blue-50 flex-1">
        <PostForm />
      </div>
    </MainLayout>
  );
};
