import React from 'react';
import { Logo } from '../logo/Logo';
import { NavLink, Link } from 'react-router-dom';

type NarvigationProps = {};

export const Narvigation: React.FC<NarvigationProps> = () => {
  return (
    <header className="w-full h-12 px-6 flex justify-between items-stretch bg-blue-700">
      <div className="flex items-center">
        <Logo name="Feed APP" />
      </div>
      <div className="flex items-center gap-6">
        <nav className="relative">
          <div className="h-full hidden sm:flex items-stretch">
            <NavLink className="px-4 text-white hover:text-sky-400" end to="/">
              <span>Time Line</span>
            </NavLink>
            <NavLink
              className="h-max block px-4  text-white hover:text-sky-400"
              to="/poste-regiter"
            >
              <span>New Post</span>
            </NavLink>
          </div>
          <div className="flex items-center sm:hidden">
            <input
              type="checkbox"
              className="peer sm:hidden absolute before:content-[':'] "
            />
            <div className="absolute rounded-sm shadow-md top-full -right-4 mt-6 transition-opacity opacity-0 peer-checked:opacity-100 duration-500 hidden peer-checked:flex flex-col py-4 bg-white">
              <NavLink className="px-4 py-2 whitespace-nowrap" end to="/">
                <span>Time Line</span>
              </NavLink>
              <NavLink
                className="px-4 py-2 whitespace-nowrap"
                to="/poste-regiter"
              >
                <span>New Post</span>
              </NavLink>
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
