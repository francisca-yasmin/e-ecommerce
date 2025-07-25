import { Card } from "../../Components/Card";
import axios from "axios";
import { useEffect, useState } from "react"; //state controla em que mommento do codigo eu estou, effect exibe isso em tela

export default function Home() {
  const API_url = "https://dummyjson.com/products";

  const [produtos, setProdutos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const produtosPorPagina = 12;

  //paginas
  const indexUltimoProduto = paginaAtual * produtosPorPagina;
  const indexPrimeiroProduto = indexUltimoProduto - produtosPorPagina;

  const produtosPagina = produtos.slice(indexPrimeiroProduto, indexUltimoProduto);

  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

  // Função para mudar a página
  const mudarPagina = (numero: number) => {
    setPaginaAtual(numero);
  };


  useEffect(() => {
    axios.get(`${API_url}`).then((response) => {
      setProdutos(response.data.products);
    });
  }, []);

  return (
    <>
    <h1 className="text-3xl font-bold text-center my-8"> Lista de Produtos </h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {produtos.map((produto: any) => (
          <Card key={produto.id} produto={produto} />
        ))}
    </div>

    {/* paginação */}
    <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => mudarPagina(i + 1)}
              className={`px-6 py-2 rounded ${
                paginaAtual === i + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
    </>
  );
}
