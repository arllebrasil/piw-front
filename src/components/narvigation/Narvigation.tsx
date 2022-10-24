import React from 'react';
import { Logo } from '../logo/Logo';

type NarvigationProps = {};

export const Narvigation: React.FC<NarvigationProps> = () => {
  return (
    <header className="w-full h-12 px-6 flex justify-between items-center bg-blue-700 text-white">
      <div>
        <Logo name="Feed APP" />
      </div>
      <div className="flex items-center gap-6">
        <nav className="flex gap-4">
          <button className="hover:text-sky-400">Time Line</button>
          <button className="px-3 py-1 bg-blue-50 rounded-sm text-blue-500 hover:text-blue-600">
            New Post
          </button>
        </nav>
        <h3 className="font-semibold">@User Name</h3>
      </div>
    </header>
  );
};
