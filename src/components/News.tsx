import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  // ... otras propiedades de un artículo
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const apikey: string = '6883c7a1ce3f1d23af9e2df10716dd51';
    const url: string = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedArticles: Article[] = data.articles;
        setArticles(fetchedArticles);
      });
  }, []);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {/* Mostrar otras propiedades del artículo si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
