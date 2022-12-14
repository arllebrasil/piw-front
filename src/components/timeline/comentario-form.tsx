import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../../utils/api';
import { ComentarioData } from './Post';

interface ComentarioFormData {
  texto: string;
}

export const ComentarioForm: React.FC<{id_post:number, addComentario?:(comentario:ComentarioData) => void}> = ({id_post,addComentario}) => {
  const { register, handleSubmit } = useForm<ComentarioFormData>();

  async function handleComentarioSubmit(data:ComentarioFormData) {
    try {
      const comentario = await ( await api.post<ComentarioData>("/comentarios", {
        ...data,
        id_post
      })).data;
      if(comentario) {
        addComentario?.(comentario);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleComentarioSubmit)}>
        <div className="flex px-1 py-2 items-center gap-2">
          <input
            className="peer flex-1 h-8 px-2 text-blue-800 bg-transparent rounded-sm focus:outline-none"
            placeholder="Deixe seu comentario"
            type="text"
            {...register('texto')}
          />
          <button
            className="opacity-100 text-white font-bold peer-placeholder-shown:opacity-0 px-4 py-1 rounded-full bg-blue-600/60"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
