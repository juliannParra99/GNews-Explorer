import React, { useEffect, useState } from "react";
import { fetchNews, Article } from "../api"; // Ruta al archivo NewsService
import NewsCards from '../components/cards/NewsCards';
import SpinnerAnimation from '../components/spinner/Spinner'; 



const NewsComponent: React.FC = () => {
  // Article[]': Es un tipo genérico que especifica el tipo de datos que se almacenarán en 'articles'.
  // En este caso, se espera un array de objetos del tipo 'Article'.
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para el spinner

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const noticias = await fetchNews();
        setArticles(noticias);
        //once we get the data, we change the value of loading, to don't show the spinner anymore.
        setLoading(false); // Cuando se obtienen los datos, detiene el spinner
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };
    //trae las noticias obtenidas de feth news
    obtenerNoticias();
  }, []);

  // Renderiza tu componente de acuerdo a los datos de noticias (articles)
  return (
    <div>
      <h1 className="mb-4 mt-4 p-1">Latest News</h1>
      {/* we use the state of loading to define if we will show the spinner or to renderize the data from the api */}
      {loading ? (
        <SpinnerAnimation /> // Muestra el spinner mientras se cargan los datos
      ) : (
        articles.map((article, index) => (
          <NewsCards key={index} article={article} />
        ))
      )}
    </div>
  );
};

export default NewsComponent;
