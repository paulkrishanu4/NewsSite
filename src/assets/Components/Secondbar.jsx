import {useState} from 'react';

import './Secondbar.css';

export const Secondbar = ({setCategory,setFind}) => {
  const [colour,setColour] = useState("");
  const [colour1,setColour1] = useState("");
  const [colour2,setColour2] = useState("");
  const [colour3,setColour3] = useState("");
  const [colour4,setColour4] = useState("");
  const [colour5,setColour5] = useState("");
  const [inputvalue,setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
    setFind(event.target.value);
  };
  return (
    <div className="sec-bar-center">

     <ul>
        <li onClick={()=>{setCategory("business"); setColour("red"); setColour1("");setColour2("");setColour3("");setColour4("");setColour5("");}}  style={{ color: colour }}>Business</li>

        <li onClick={()=>{setCategory("entertainment"); setColour1("red"); setColour("");setColour2("");setColour3("");setColour4("");setColour5("");}}  style={{ color: colour1 }}>Entertainment</li>

        <li onClick={()=>{setCategory("health"); setColour2("red"); setColour1("");setColour(""); setColour3("");setColour4("");setColour5("");}}  style={{ color: colour2 }}>Health</li>

        <li onClick={()=>{setCategory("sports"); setColour3("red"); setColour1("");setColour(""); setColour2("");setColour4("");setColour5("");}}  style={{ color: colour3 }}>Sports</li>

        <li onClick={()=>{setCategory("science"); setColour3(); setColour1("");setColour(""); setColour2("");setColour4("red");setColour5("");}} style={{ color: colour4 }}>Science</li>

        <li onClick={()=>{setCategory("technology"); setColour3(); setColour1("");setColour(""); setColour2("");setColour4("");setColour5("red");}} style={{ color: colour5 }}>Technology</li>
      </ul>
      <div className="bar-search">
      <input type="text" value={inputvalue} placeholder="search here" onChange={handleInputChange}></input>
      
      </div>

    </div>
  )
}
