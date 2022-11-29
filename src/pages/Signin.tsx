import React from 'react';
import { useForm } from 'react-hook-form';
import { HomeLayout } from '../components/layout/HomeLayout';

interface FormData{
  email:string;
  senha:string;
}

export const SignIn: React.FC<{}> = ({}) => {

  const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

  function handleSignIn(data:FormData){

  }

  return (
    <HomeLayout>
        <div className="flex justify-center items-center bg-blue-50 flex-1">
        <div className="w-full max-w-[420px] flex flex-col items-center px-4 py-8 rounded-sm bg-blue-900/80 text-white">
        <h2 className='text-2xl'>Faça seu login</h2>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className=" flex flex-col justify-center items-center gap-4">
                <fieldset name="credenciais">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <label className='flex flex-col gap-1'>
                      <label htmlFor="">Email:</label>
                      <input 
                        type="email"
                        {...register("email",{required:true})}
                        className="w-full h-10 px-2 py-0.5 text-stone-50 bg-black/5 rounded-sm outline outline-1 outline-white/10"/>
                        {(errors.email) && <span className='text-sm text-red-400'>Campo obrigatório</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                      <label htmlFor="">Senha:</label>
                      <input 
                        type="password"
                        {...register("senha",{required:true})}
                        className="w-full h-10 px-2 py-0.5 text-stone-50 bg-black/5 rounded-sm outline outline-1 outline-white/10" 
                      />
                      {(errors.senha) && <span className='text-sm text-red-400'>Campo obrigatório</span>}
                    </label>
                  </div>
                </fieldset>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 rounded-sm bg-white text-blue-900">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
    </HomeLayout>
  );
};
