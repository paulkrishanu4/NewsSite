import './Navbar.css';
import {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Secondbar } from './Secondbar.jsx';

export const Navbar = ({setCategory,setFind}) => {
  const [colour,setColour] = useState("");
  const [colour1,setColour1] = useState("");
  const [colour2,setColour2] = useState("");
  const [colour3,setColour3] = useState("");
  const [colour4,setColour4] = useState("");
  const [colour5,setColour5] = useState("");
  const [inputvalue,setInputValue] = useState("");
  const [menu,setMenu] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
    setFind(event.target.value);
  };
  const togglemenu=()=>{
    setMenu(!menu);
   console.log(menu);
  };

  
  
  return (
    <>
    <div className="header">
      <img src="./images/n_logo.jpg"></img>
      <ul>
        <li onClick={()=>{setCategory("business"); setColour("white"); setColour1("");setColour2("");setColour3("");setColour4("");setColour5("");}}  style={{ color: colour }}>Business</li>

        <li onClick={()=>{setCategory("entertainment"); setColour1("white"); setColour("");setColour2("");setColour3("");setColour4("");setColour5("");}}  style={{ color: colour1 }}>Entertainment</li>

        <li onClick={()=>{setCategory("health"); setColour2("white"); setColour1("");setColour(""); setColour3("");setColour4("");setColour5("");}}  style={{ color: colour2 }}>Health</li>

        <li onClick={()=>{setCategory("sports"); setColour3("white"); setColour1("");setColour(""); setColour2("");setColour4("");setColour5("");}}  style={{ color: colour3 }}>Sports</li>

        <li onClick={()=>{setCategory("science"); setColour3(); setColour1("");setColour(""); setColour2("");setColour4("white");setColour5("");}} style={{ color: colour4 }}>Science</li>

        <li onClick={()=>{setCategory("technology"); setColour3(); setColour1("");setColour(""); setColour2("");setColour4("");setColour5("white");}} style={{ color: colour5 }}>Technology</li>
      </ul>
      <div className="search">
      <input type="text" value={inputvalue} placeholder="search here" onChange={handleInputChange}></input>
      <FaSearch className="s-icon"></FaSearch>
      </div>
      <TiThMenu className="menu-btn" onClick={togglemenu}/>

    </div>
     {
        menu && <Secondbar setCategory={setCategory} setFind={setFind}/>
    }
    </>
  )
}
