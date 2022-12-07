import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../utils/api";

export interface Usuario{
    id?:number;
    nome?:string;
    email?:string;
    senha?:string;
}

export interface AuthContextState{
    signIn:(usuario:Usuario) => Promise<void>;
    signUp:(usuario:Usuario) => Promise<Usuario | undefined>;
    signOut:() => Promise<void>;
    usuario: Usuario | null;
    token:string | null;
}

interface AuthProviderProps{
    children:ReactNode
}

export const AuthContext = createContext<AuthContextState|null>(null);


export const AuthProvider = ({children}:AuthProviderProps) => {

    const [usuario, setUsuario] = useState<Usuario|null>(() => {
        let storedUserJson = localStorage.getItem("usuario") ?? null;
        return storedUserJson ? JSON.parse(storedUserJson) : null;
    });

    const [token, setToken] = useState<string|null>(() => {
        let storedTokenJson = localStorage.getItem("token");
        return storedTokenJson ?? null;
    });

    async function signIn({email, senha}:Usuario){
        try {
            const {token, usuario, error} = await (await api.post<{usuario?:Usuario, token?:string, error?:string}>("/usuarios/signin",{email, senha})).data;
            if(token){
                setToken(token);
                localStorage.setItem("token", token);
            }
            if(usuario) {
                setUsuario(usuario);
                localStorage.setItem("usuario", JSON.stringify(usuario));
            };
        } catch (error) {
            throw error;
        }
    }

    async function signUp({email, nome, senha}:Usuario){
        try {
            const usuario = await (await api.post<Usuario>("/usuarios/cadastro",{email, senha, nome})).data;
            if(usuario){
                return usuario;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function signOut(){
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setToken(null);
        setUsuario(null);
        console.log("Sair");
    }

    return <AuthContext.Provider value={{usuario, signIn, signUp,signOut, token}}>
        {children}
    </AuthContext.Provider>
}

