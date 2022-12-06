import React from 'react';
import { Logo } from '../logo/Logo';
import { NavLink, Link } from 'react-router-dom';

type NarvigationProps = {};

export const HomeNarvigation: React.FC<NarvigationProps> = () => {
  return (
    <header className="w-full h-12 px-6 flex justify-between items-stretch bg-blue-700">
      <div className="flex items-center">
        <Logo name="Feed APP" />
      </div>
      <div className="flex items-center gap-6">
        <nav className="relative">
          <div className="h-12 hidden sm:flex items-center">
            <NavLink className="h-12 flex justify-center items-center px-4 text-white hover:text-sky-400" end to="/login">
              <a>Login</a>
            </NavLink>
            <NavLink className="h-12 flex justify-center items-center px-4 text-white hover:text-sky-400" 
              to="/cadastro"
            >
              <a>Cadastre-se</a>
            </NavLink>
          </div>
          <div className="flex items-center sm:hidden">
            <input
              type="checkbox"
              className="peer sm:hidden absolute before:content-[':'] "
            />
            <div className="absolute z-10 rounded-sm shadow-md top-full -right-4 mt-6 hidden peer-checked:flex peer-checked:flex-col py-4 bg-white">
              <NavLink className="px-4 py-2 whitespace-nowrap" end to="/login">
                <a>Login</a>
              </NavLink>
              <NavLink
                className="px-4 py-2 whitespace-nowrap"
                to="/cadastro"
              >
                <a>Cadastre-se</a>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};