import { Card } from "../../Components/Card";
import axios from "axios";
import { useEffect, useState } from "react"; //state controla em que mommento do codigo eu estou, effect exibe isso em tela

export default function Home() {
  const API_url = "https://dummyjson.com/products";

  const [produtos, setProdutos] = useState<any>(0);

  useEffect(() => {
    axios.get(`${API_url}`).then((response) => {
      console.log(response.data.products);
      setProdutos(response.data.products);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          <div>
            {produtos.map((produto) => (
              <Card />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}
