import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import { Subscribe } from './pages/Subcribe';
import { FeedPage } from './pages/Feed';
import { HomePage } from './pages/HomePage';
import { PostRegister } from './pages/PostRegiter';
import { SignIn } from './pages/Signin';
import { useContext } from 'react';
import { AuthContext, AuthContextState } from './context/auth/AuthContext';

function Router() {

  const {token} = useContext(AuthContext) as AuthContextState;

  return (
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/login" 
                element={(!token) ? <SignIn /> : <Navigate to="/feed" />}
               />
              <Route 
                path="/cadastro" 
                element={(!token) ? <Subscribe /> : <Navigate to="/" />}
               />
              <Route 
                path="/feed" 
                element={(token) ? <FeedPage /> : <Navigate to="/" />} 
              />
              <Route 
                path="/poste-regiter" 
                element={(token) ? <PostRegister /> : <Navigate to="/" />} 
              />
            </Routes>
      </BrowserRouter>
  );
}

export default Router;