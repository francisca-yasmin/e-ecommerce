import { Route, Routes } from 'react-router'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path ='/produto'
    </Routes>
  );
}

export default App
