import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../utils/api";

export interface Usuario{
    id?:number;
    nome?:string;
    email?:string;
    senha?:string;
}

export interface AuthContextState{
    handleSignIn:(usuario:Usuario) => Promise<void>;
    handleSignUp:(usuario:Usuario) => Promise<Usuario | undefined>;
    usuario: Usuario | null;
}

interface AuthProviderProps{
    children:ReactNode
}

export const AuthContext = createContext<AuthContextState|null>(null);


export const AuthProvider = ({children}:AuthProviderProps) => {

    const [usuario, setUsuario] = useState<Usuario|null>(null);

    useEffect(() => {
        let storedToken = localStorage.getItem("token");
        if(!storedToken) return;

        let storedUser:Usuario|null =  null;
        let storedUserJson = localStorage.getItem("usuario");
        if(!storedUserJson) return;

        storedUser = JSON.parse(storedUserJson) as Usuario ?? null;
        setUsuario(storedUser);

        return function(){
            if(usuario){
                localStorage.setItem("usuario", JSON.stringify(usuario));
            }
        }
    }, []);

    async function handleSignIn({email, senha}:Usuario){
        localStorage.setItem("token","abc123");
        try {
            const {token, usuario, error} = await (await api.post<{usuario?:Usuario, token?:string, error?:string}>("/usuarios/signin",{email, senha})).data;
            if(usuario) {
                setUsuario(usuario);
                // localStorage.setItem("usuario", JSON.stringify(usuario));
            };
            if(token) localStorage.setItem("token", token);
        } catch (error) {
            throw error;
        }
    }

    async function handleSignUp({email, nome, senha}:Usuario){
        localStorage.setItem("token","abc123");
        try {
            const usuario = await (await api.post<Usuario>("/usuarios/cadastro",{email, senha, nome})).data;
            if(usuario){
                return usuario;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setUsuario(null);
    }



    return <AuthContext.Provider value={{usuario, handleSignIn, handleSignUp}}>
        {children}
    </AuthContext.Provider>
}

