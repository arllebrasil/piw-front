import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Subscribe } from './pages/Subcribe';
import { FeedPage } from './pages/Feed';
import { HomePage } from './pages/HomePage';
import { PostRegister } from './pages/PostRegiter';
import { SignIn } from './pages/Signin';

function Router() {
  return (
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/cadastro" element={<Subscribe />} />
              <Route path="/feed" element={<FeedPage title="Feed" />} />
              <Route path="/poste-regiter" element={<PostRegister />} />
            </Routes>
      </BrowserRouter>
  );
}

export default Router;