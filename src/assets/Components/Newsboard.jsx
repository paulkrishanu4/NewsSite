import { useState } from 'react';
import { useEffect } from 'react';
import { News } from './News'
import './Newsboard.css';

export const Newsboard = ({category,country,find}) => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?q=${find}&country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticle(data.articles));
  }, [category,country,find])
  return (
    <div className="parent">
    <h1>Latest<span>News</span></h1>
    <div className="newsBoard">
    {articles.map((n, index) => {
      return <News key={index} title={n.title} description={n.description} src={n.urlToImage} url={n.url}></News>
    })}
    </div>
    </div>
  )
}
