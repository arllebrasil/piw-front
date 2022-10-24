import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  name: string;
};

export const Logo: React.FC<LogoProps> = ({ name }) => {
  return (
    <Link to="/">
      <h2 className="text-2xl text-white font-extrabold">{name.toUpperCase()}</h2>
    </Link>
  );
};
