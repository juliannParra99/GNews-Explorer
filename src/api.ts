import axios from "axios";
import api_key from "./apiKey"

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

// Checking if the API key exists, throwing an error if it's missing
if (!api_key) {
  throw new Error('API_KEY not found in environment variables');
}

// Creating the URL using the API key
const url: string = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${api_key}`;

// Function to fetch news articles
export const fetchNews = async (): Promise<Article[]> => {
  try {
    // We will put the data wich came from the api into de 'articles', which is an object with Aticle type that give arrays.
    const response = await axios.get<{ articles: Article[] }>(url);

    // Returning array with data
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    
    // Returning an empty array in case of an error
    return [];
  }
};

