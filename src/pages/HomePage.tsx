import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLayout } from '../components/layout/HomeLayout';

export const HomePage: React.FC<{}> = ({}) => {
  return (
    <HomeLayout>
        <div className="flex flex-col justify-center items-center gap-4 px-1 sm:px-3 md:px-4 bg-blue-50 flex-1">
          <h1 className="text-3xl font-bold text-blue-800">Feed App</h1>
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-slate-600">Entre no seu perfil agora mesmo</h2>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Link to="/">
                <a className="px-8 py-4 text-blue-800 bg-white text-xl font-bold rounded-md shadow-xl">Entrar</a>
              </Link>
              <span> OU </span>
              <Link to="/">
              <a className="px-8 py-4 bg-blue-800 text-white text-xl font-bold rounded-md shadow-xl">Entrar</a>
              </Link>
            </div>
          </div>
        </div>
    </HomeLayout>
  );
};
