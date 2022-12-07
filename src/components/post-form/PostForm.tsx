import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { Postagem } from '../timeline/Post';

interface FormData {
  texto: string;
}
export const PostForm: React.FC<any> = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const narvigate = useNavigate();
  async function submitPost(data: FormData) {
    try{
      await api.post<Postagem>("/posts",data);
      console.log(data);
      narvigate('/feed');
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-blue-600 font-medium mb-4">
        Post algo sobre o seu dia
      </h2>
      <form onSubmit={handleSubmit(submitPost)}>
        <fieldset name="Post">
          <label>
            <label></label>
            <textarea
              className="w-full h-24 px-4 py-2 rounded-sm focus:outline-blue-400"
              id="texto"
              placeholder="Escreva qualquer coisas sobre você"
              {...register('texto')}
            />
          </label>
        </fieldset>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-sm font-medium bg-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
