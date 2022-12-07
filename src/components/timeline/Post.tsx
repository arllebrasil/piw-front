import React, { useEffect, useState } from 'react';
import { Usuario } from '../../context/auth/AuthContext';
import api from '../../utils/api';
import { Comentario } from './Comentario';
import { ComentarioForm } from './comentario-form';

export interface Postagem {
  id:number;
  texto:string;
  id_usuario:number;
  likes:number;
};

export interface ComentarioData {
  id:number;
  texto:string;
  id_usuario:number;
  id_post:number;
};

export const Post = ({ post }: { post: Postagem }) => {
  const { id, id_usuario, texto, likes } = post;
  const [usuario,setUsuario] = useState<Usuario|null>(null);
  const [comentarios, setComentarios] = useState<ComentarioData[]>([]);

  useEffect(() => {
    api.get<{nome:string}>(`/usuarios/${id_usuario}`)
    .then((response) => setUsuario(response.data))
    .catch((console.log));
  }, []);

  useEffect(() => {
    api.get<ComentarioData[]>(`/comentarios/${post.id}`)
    .then( (response) => setComentarios(response.data))
    .catch(console.log);
  })

  return (
    <div className="relative flex overflow-clip flex-col items-stretch bg-blue-100/75 rounded-md shadow-sm shadow-blue-400/75">
      <div className="px-2 py-4">
        <div className="flex justify-between items-center">
          <span className="text-blue-400">@{usuario?.nome}</span>
          <span className="text-stone-500 text-sm">{`#${id}`}</span>
        </div>
        <div className="px-1 text-2xl">
          <p>{texto}</p>
        </div>
        <div className="w-full h-[1px] my-4 opacity-20 bg-blue-600"></div>
        <div className="flex">
          <label className="w-6 h-6 flex items-cente justify-center">
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
              curtidas
            </span>
          </span>
        </div>
        <div>
          <h2 className="text-sm">Comentarios</h2>
          <div>
            {
              comentarios.map((comentario) => (
                <Comentario key={`${comentario.id}`} {...comentario} />
              ))
            }
          </div>
        </div>
      </div>
      <ComentarioForm id_post={id} />
    </div>
  );
};
