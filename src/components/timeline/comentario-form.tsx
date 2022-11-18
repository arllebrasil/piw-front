import React from 'react';
import { useForm } from 'react-hook-form';

interface ComentarioFormData {
  comentario: string;
}

export const ComentarioForm: React.FC<{}> = ({}) => {
  const { register, handleSubmit } = useForm<ComentarioFormData>();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => alert(data.comentario))}>
        <div className="flex px-1 py-2 items-center gap-2">
          <input
            className="peer flex-1 h-8 px-2 text-blue-800 bg-transparent rounded-sm focus:outline-none"
            placeholder="Deixe seu comentario"
            type="text"
            {...register('comentario')}
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
