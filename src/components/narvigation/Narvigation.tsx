import React from 'react';
import { Logo } from '../logo/Logo';
import { NavLink, Link } from 'react-router-dom';

type NarvigationProps = {};

export const Narvigation: React.FC<NarvigationProps> = () => {
  return (
    <header className="w-full h-12 px-6 flex justify-between items-center bg-blue-700">
      <div>
        <Logo name="Feed APP" />
      </div>
      <div className="flex items-center gap-6">
        <nav className="relative">
          <div className="hidden sm:flex items-center gap-4">
            <NavLink end to="/">
              <span className="block hover:text-sky-400">Time Line</span>
            </NavLink>
            <Link to="/">
              <span className="block px-3 py-1 bg-blue-50 rounded-sm text-blue-500 hover:text-blue-600">
                New Post
              </span>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <input
              type="checkbox"
              className="peer sm:hidden absolute before:content-[':'] "
            />
            <div className="absolute top-full -right-10 mt-6 transition-opacity opacity-0 peer-checked:opacity-100 duration-500 hidden peer-checked:flex flex-col px-2 py-1 bg-white gap-4">
              <NavLink end to="/">
                <span className="block hover:text-sky-400">Time Line</span>
              </NavLink>
              <Link to="/">
                <span className="block px-3 py-1 bg-blue-50 rounded-sm whitespace-nowrap text-blue-500 hover:text-blue-600">
                  New Post
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <span className="block w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-300"></span>
          <h3 className="hidden sm:block font-semibold text-sm">@User Name</h3>
        </div>
      </div>
    </header>
  );
};
