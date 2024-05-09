
import './App.css'
import { Country } from './assets/Components/Country';

import { Navbar } from './assets/Components/Navbar'
import { Newsboard } from './assets/Components/Newsboard';
import { useState } from 'react';


function App() {
  
  const [category,setCategory] = useState("general");
  const [country,setcountry] = useState("us");
  const [find,setFind]= useState("");

  
  return (
    <div className="container">
    <Navbar setCategory={setCategory} setFind={setFind}></Navbar> 
    <Country setcountry={setcountry}></Country>
    <Newsboard category={category} country={country} find={find}></Newsboard>
    </div>
    
  )
}

export default App
