import React, { useEffect, useState } from "react";
import { fetchNews, Article } from "../api"; // Ruta al archivo NewsService
import NewsCards from '../components/cards/NewsCards';


const NewsComponent: React.FC = () => {
  // Article[]': Es un tipo genérico que especifica el tipo de datos que se almacenarán en 'articles'.
  // En este caso, se espera un array de objetos del tipo 'Article'.
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const noticias = await fetchNews();
        setArticles(noticias);
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
      <h1>Latest News</h1>
      {articles.map((article, index) => (
        <NewsCards key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsComponent;
