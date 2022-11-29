import { createContext, ReactNode } from "react";


export interface AuthContextState{
    handleSignIn:(email:string,senha:string) => any;
}

interface AuthProviderProps{
    children:ReactNode
}

const AuthContext = createContext<AuthContextState|null>(null);


export const AuthProvider = ({children}:AuthProviderProps) => {

    async function handleSignIn(email:string,senha:string){
        localStorage.setItem("token","abc123");
        return {
            email:"arlle@email.com",
            senha:"123456",
        }
    }

    async function handleSignOut(){
        localStorage.removeItem("token");
    }



    return <AuthContext.Provider value={{handleSignIn}}>
        {children}
    </AuthContext.Provider>
}

