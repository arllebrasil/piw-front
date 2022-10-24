import React from 'react';

export type Postagem = {
  id: Number;
  userName: string;
  texto: string;
  likes: Number;
};

export const Post = ({ post }: { post: Postagem }) => {
  const { id, userName, texto, likes } = post;
  return (
    <div className="flex px-6 py-4 flex-col items-stretch bg-blue-100/75 rounded-md shadow-sm shadow-blue-400/75">
      <div className="flex justify-between items-center">
        <span className="text-blue-400">@{userName}</span>
        <span className="text-stone-500 text-sm">{`#${id}`}</span>
      </div>
      <div className="px-1 py-2">
        <p>{texto}</p>
      </div>
      <div className="flex">
        <label className="w-6 h-6 relative flex items-cente justify-center">
          <input type="checkbox" className="peer absolute top-1/4 opacity-0" />
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
    </div>
  );
};
