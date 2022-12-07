import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Post, Postagem } from './Post';

type TimeLineProps = {
  postagens?: Postagem[];
};

export interface Post{
  id:number;
  texto:string;
  id_usuario:number;
  likes:number;
}

export const TimeLine: React.FC = ({ postagens }: TimeLineProps) => {

  const [posts,setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get<Post[]>("/posts")
    .then((response) => setPosts(response.data))
    .catch(console.log);
  });

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
