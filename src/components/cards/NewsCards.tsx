import React from "react";
import Card from "react-bootstrap/Card";
import { Article } from "../../api";

function NewsCards({ article }: { article: Article }) {
  return (
    <div className="m-3 mt-0 mb-5">
      <Card>
        <Card.Body>
          <h2> {article.title}</h2>
          <h4> {article.description}</h4>
          <Card.Text>{article.content}</Card.Text>
        </Card.Body>
        <Card.Img src={article.image} alt={article.image} />
      </Card>
    </div>
  );
}

export default NewsCards;
