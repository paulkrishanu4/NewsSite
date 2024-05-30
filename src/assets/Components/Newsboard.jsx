import { useState } from 'react';
import { useEffect } from 'react';
import { News } from './News'
import './Newsboard.css';

export const Newsboard = ({category,country,find}) => {
  const [articles, setArticle] = useState([]);
  

  useEffect(() => {
    let url = ' https://gnews.io/api/v4/top-headlines?category='+ category +'&country='+ country +'&lang=en&apikey=616ef54c32e24c293f741d89618af93f';
    let url2='https://gnews.io/api/v4/search?q='+find+'&apikey=616ef54c32e24c293f741d89618af93f'
    find.length>0?fetch(url2).then(response => response.json()).then(data => setArticle(data.articles)):fetch(url).then(response => response.json()).then(data => setArticle(data.articles));
    //fetch(url).then(response => response.json()).then(data => setArticle(data.articles));
  }, [category,country,find])
  console.log(articles);
  return (
    <div className="parent">
    <h1>Latest<span>News</span></h1>
    <div className="newsBoard">
    {articles!=undefined?articles.map((n, index) => {
      return <News key={index} title={n.title} description={n.description} src={n.image} url={n.url}></News>
    }):<h1>News Not Found</h1>
  }
    </div>
    </div>
  )
}
