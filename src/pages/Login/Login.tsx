import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

function Login() {
  //tipar o useState colocando -> useState<number>(0)
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  //fazendo outra maneira de tipagem
  const logar = async () => {
    try{
        await axios.post('https://dummyjson.com/auth/login',{
        username: username,
        password: password,
      });
      navigate("/home")
    } catch (error){
      setError('Credenciais invalidas');
    }
  }

  return (
    <div className="p-10">
      <h2> Login </h2>
      <div className='py-1'>
        <label htmlFor="username"> Username </label>
        {/* target é o input */}
        <input type="text" 
        id="username"
        className='border-2 border-blue-500' 
        onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='py-1'>
        <label htmlFor="password"> Password </label>
        {/* target é o input */}
        <input type="password" 
        id="password"
        className='border-2 border-blue-500'  
        onChange={(e) => setPassword(e.target.value)} />
      </div>

      <p>{error}</p>

      <button className='border border-purple-500 p-4' onClick={logar}>
        Logar
      </button>

    </div>
  )
}

export default Login
