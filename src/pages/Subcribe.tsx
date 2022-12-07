import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { HomeLayout } from '../components/layout/HomeLayout';
import { AuthContext, AuthContextState } from '../context/auth/AuthContext';

interface FormData{
  nome:string;
  email:string;
  senha:string;
}

export const Subscribe: React.FC<{}> = ({}) => {

  const {register, handleSubmit, formState:{errors}} = useForm<FormData>();
  const {signUp} = useContext(AuthContext) as AuthContextState;
  const navigate = useNavigate();

  async function handleSignUp(data:FormData){
    try {
      await signUp(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeLayout>
        <div className="flex justify-center items-center bg-blue-50 flex-1">
          <div className="w-full max-w-[420px] flex flex-col items-center px-4 py-8 rounded-sm bg-blue-900/80 text-white">
            <h2 className='text-2xl'>Crie sua conta</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className=" flex flex-col justify-center items-center gap-4">
                <fieldset name="credenciais">
                  <div className="flex flex-col justify-center items-center gap-1">
                  <label className='flex flex-col gap-1'>
                      <label htmlFor="">Nome:</label>
                      <input 
                        type="text"
                        {...register("nome",{required:true})}
                        className="w-full h-10 px-2 py-0.5 text-stone-50 bg-black/5 rounded-sm outline outline-1 outline-white/10"/>
                        {(errors.nome) && <span className='text-sm text-red-400'>Preencha todos os campos</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                      <label htmlFor="">Email:</label>
                      <input 
                        type="email"
                        {...register("email",{required:true})}
                        className="w-full h-10 px-2 py-0.5 text-stone-50 bg-black/5 rounded-sm outline outline-1 outline-white/10"/>
                        {(errors.email) && <span className='text-sm text-red-400'>Preencha todos os campos</span>}
                    </label>
                    <label className='flex flex-col gap-1'>
                      <label htmlFor="">Senha:</label>
                      <input 
                        type="password"
                        {...register("senha",{required:true})}
                        className="w-full h-10 px-2 py-0.5 text-stone-50 bg-black/5 rounded-sm outline outline-1 outline-white/10" 
                      />
                      {(errors.senha) && <span className='text-sm text-red-400'>Preencha todos os campos</span>}
                    </label>
                  </div>
                </fieldset>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 rounded-sm bg-white text-blue-900">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
    </HomeLayout>
  );
};
