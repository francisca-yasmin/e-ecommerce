import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from 'axios';

function DetalhesProduto(){
    const { id } = useParams();
    const [produto, setProduto] = useState<any>(null);

    const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduto(response.data);
    });
  }, [id]);

  if (!produto) {
    return <p className="text-center mt-10 text-lg">Carregando...</p>;
  }

  return (
    <>
        <div className="absolute top-6 left-6">
            <button onClick={() => navigate('/home')}
             className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded shadow cursor-pointer"
                > Voltar </button>
        </div>
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">{produto.title}</h1>
            <img src={produto.thumbnail} alt={produto.title} className="w-full mb-4" />
            <p><strong>Preço:</strong> ${produto.price}</p>
            <p className="mt-2">{produto.description}</p>
        </div>
    </>
    )
    
}
export default DetalhesProduto;