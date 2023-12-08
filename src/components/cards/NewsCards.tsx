import React from "react";
import Card from "react-bootstrap/Card";
import { Article } from "../../api";

function NewsCards({ article }: { article: Article }) {
  return (
    <Card>
      <Card.Body>
        <h2> {article.title}</h2>
        <h4> {article.description}</h4>
        <Card.Text>
          {article.content}
        </Card.Text>
      </Card.Body>
      <Card.Img  src={article.image} alt={article.image} />
    </Card>
    
  );
}

export default NewsCards;
