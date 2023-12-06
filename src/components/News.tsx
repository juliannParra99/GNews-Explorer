import React, { useEffect, useState } from 'react';
import { fetchNews, Article } from '../api'; // Ruta al archivo NewsService

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
        console.error('Error al obtener las noticias:', error);
      }
    };
    //trae las noticias obtenidas de feth news
    obtenerNoticias();
  }, []);

  // Renderiza tu componente de acuerdo a los datos de noticias (articles)
  return (
    <div>
      <h1>Últimas noticias</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <p>{article.url}</p>
            <img src={article.image} alt={article.image} />
            <p>{article.publishedAt}</p>
            <p>{article.source.name}</p>
            <p>{article.source.url}</p>
            {/* Renderiza otros detalles del artículo si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;

