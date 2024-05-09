import { useState,useEffect } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import './News.css';



export const News = ({title,description,src,url}) => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  const array=[];
  var x=0;

  function funone(){
    array[x++]=title;
    console.log(array[x-1]);
  }
  

  useEffect(()=>{
    setValue(title)
  },[title]);
  
  return (
    <div className="square" style={{maxWidth:"445px"}}>
      <img src={src?src:"./images/news.jpg"}></img>
      <h2>{title}</h2>
      <h5>{description}</h5>
      <a href={url}><button>Read More</button></a>
      <button onClick={() =>{speak({ text: value });setValue(title);}}>Listen</button>
         
    </div>
  )
}
