import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/indexPage';
import Layout from './layouts/Layout';
import AuthPage from './pages/authPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<AuthPage type='login' />} />
        <Route path='/register' element={<AuthPage type='register' />} />
      </Route>
    </Routes>
  );
}

export default App;
