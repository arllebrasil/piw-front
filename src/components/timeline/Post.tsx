import React from 'react';
import { ComentarioForm } from './comentario-form';

export type Postagem = {
  id: Number;
  userName: string;
  texto: string;
  likes: Number;
};

export const Post = ({ post }: { post: Postagem }) => {
  const { id, userName, texto, likes } = post;
  return (
    <div className="relative flex overflow-clip flex-col items-stretch bg-blue-100/75 rounded-md shadow-sm shadow-blue-400/75">
      <div className="px-2 py-4">
        <div className="flex justify-between items-center">
          <span className="text-blue-400">@{userName}</span>
          <span className="text-stone-500 text-sm">{`#${id}`}</span>
        </div>
        <div className="px-1 text-2xl">
          <p>{texto}</p>
        </div>
        <div className="w-full h-[1px] my-4 opacity-20 bg-blue-600"></div>
        <div className="flex">
          <label className="w-6 h-6 relative flex items-cente justify-center">
            <input
              type="checkbox"
              className="peer absolute top-1/4 opacity-0"
            />
            <span className="text-stone-500 text-sm peer-checked:text-red-400">
              S2
            </span>
          </label>
          <span className="text-blue-400 text-sm">
            {`${likes}`}{' '}
            <span className="text-stone-600">
              pessoas curtiram esta postagem{' '}
            </span>
          </span>
        </div>
        <div>
          <h2 className="text-sm">Comentarios</h2>
          <p className="text-sm text-stone-700">
            <span>@usuario </span> Em pleno 2022, ano da copa do mundo. Você
            conhece Elom Musck?
          </p>
        </div>
      </div>
      <ComentarioForm />
    </div>
  );
};
