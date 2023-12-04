const apikey: string = '6883c7a1ce3f1d23af9e2df10716dd51';
const url: string = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;

fetch(url)
  .then((response: Response) => {
    return response.json();
  })
  .then((data: { articles: { title: string; description: string }[] }) => {
    const articles = data.articles;

    for (let i = 0; i < articles.length; i++) {
      // articles[i].title
      console.log("Title: " + articles[i].title);
      // articles[i].description
      console.log("Description: " + articles[i].description);
      // You can replace {property} below with any of the article properties returned by the API.
      // articles[i].{property}
      // console.log(articles[i]['{property}']);

      // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
      break;
    }
  });
