import axios from "axios";

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

const apikey: string = "6883c7a1ce3f1d23af9e2df10716dd51"; // Using process.env to access API key
if (!apikey) {
  throw new Error('API_KEY not found in environment variables');
}

const url: string = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;
export const fetchNews = async (): Promise<Article[]> => {
  try {
    const response = await axios.get<{ articles: Article[] }>(url);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};


