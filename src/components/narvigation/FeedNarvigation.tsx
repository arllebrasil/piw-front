import React, { useContext } from 'react';
import { Logo } from '../logo/Logo';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextState } from '../../context/auth/AuthContext';

type NarvigationProps = {};

export const FeedNarvigation: React.FC<NarvigationProps> = () => {

  const {usuario,signOut} = useContext(AuthContext) as AuthContextState;
  const navigate = useNavigate();

  async function handleSignOut(){
    await signOut();
    navigate("/");
  }

  return (
    <header className="w-full h-12 px-6 flex justify-between items-stretch bg-blue-700">
      <div className="flex items-center">
        <Logo name="Feed APP" />
      </div>
      <div className="flex items-center gap-6">
        <nav className="relative">
          <div className="hidden sm:flex items-center">
          <NavLink className="h-12 flex justify-center items-center px-4 text-white hover:text-sky-400" end to="/feed">
              <a>Time Line</a>
            </NavLink>
            <NavLink className="h-12 flex justify-center items-center px-4 text-white hover:text-sky-400"
              to="/poste-regiter"
            >
              <a>New Post</a>
            </NavLink>
          </div>
          <div className="flex items-center sm:hidden">
            <input
              type="radio"
              name="menu"
              className="peer sm:hidden absolute before:content-[':'] "
            />
            <div className="absolute z-10 rounded-sm shadow-md top-full -right-4 mt-6 hidden peer-checked:flex peer-checked:flex-col py-4 bg-white">
              <NavLink className="px-4 py-2 whitespace-nowrap" end to="/feed">
                <a>Time Line</a>
              </NavLink>
              <NavLink
                className="px-4 py-2 whitespace-nowrap"
                to="/poste-regiter"
              >
                <a>New Post</a>
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative items-center block w-8 h-8 bg-blue-50 rounded-full border-2 border-blue-300">
            <span className=""></span>
            <input 
              type="radio"
              name="menu"
              className="peer w-full h-full opacity-0" />
            <div className="absolute z-10 top-full right-full mt-2 ml-2 min-w-[120px] invisible peer-checked:visible flex flex-col items-stretch py-4 transition-opacity opacity-0 duration-300 peer-checked:opacity-100  bg-white shadow-md">
              <button 
                className="h-12 px-4 py-2 text-xl font-medium"
                onClick={handleSignOut}
               >Sair</button>
            </div>
          </div>
          <h3 className="hidden sm:block font-semibold text-sm text-white">@{usuario?.nome}</h3>
        </div>
      </div>
    </header>
  );
};
