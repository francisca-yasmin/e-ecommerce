import { Link } from 'react-router-dom';

export function Card({ produto } : any) {
  return (
    <>
      <div className="bg-violet border border-violet-100 rounded-lg shadow-md hover:shadow-lg 
      transition duration-300 p-4 flex flex-col items-center text-center">
      <img
        src={produto.images[0]}
        alt={produto.title}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      <h2 className="text-md font-semibold mb-2">{produto.title}</h2>
      <p className="text-black font-bold text-lg mb-4">R$ {produto.price.toFixed(2)}</p>

      <Link
        to={`/produto/${produto.id}`}
        className="mt-auto bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
      >
        Ver mais
      </Link>
    </div>
    </>
  );
}
