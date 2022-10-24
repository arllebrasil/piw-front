import React from 'react';
import { Post, Postagem } from './Post';

type TimeLineProps = {
  postagens?: Postagem[];
};

export const TimeLine: React.FC = ({ postagens }: TimeLineProps) => {
  const pst = [];
  const posts = postagens ?? [
    {
      id: 10,
      userName: 'arlle br',
      texto: 'Eleições no proximo fim de semana',
      likes: 20,
    },
    {
      id: 11,
      userName: 'arlle br',
      texto: 'Eleições no proximo fim de semana',
      likes: 20,
    },
    {
      id: 12,
      userName: 'arlle br',
      texto: 'Eleições no proximo fim de semana',
      likes: 20,
    },
  ];

  return (
    <div className="w-full grid items-center co">
      {posts.length < 1 ? (
        <div className="flex justify-center">
          <span className="text-lg text-center">
            Ainda não há postagens na sua linha do tempo
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-center gap-2">
          {posts.map((post, idx) => (
            <Post key={`${post.id}`} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
