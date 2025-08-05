import { Route, Routes } from 'react-router'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import DetalhesProduto from './pages/Detalhes/DetalhesProduto';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path ='/produto/:id' element= {<DetalhesProduto/>} />
    </Routes>
  );
}

export default App
