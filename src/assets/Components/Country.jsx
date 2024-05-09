import './Country.css';


export const Country = ({setcountry}) => {
  const handleChange = (event) => {
    setcountry(event.target.value);
  };

  return (
    <div className="country-center">
    <div className="country-options">
    <h3>Select Country:</h3>

    <select onChange={handleChange} size="1">
       <option>Select an option</option>
       <option value="in" >India</option>
      
       <option value="ar" >Argentina</option> 
       <option value="de" >Germany</option> 
       <option value="ua" >Ukraine</option>
       <option value="ru" >Russia</option>
       <option value="ja" >Japan</option>
       <option value="ca" >Canada</option>
       <option value="cn" >Chaina</option>
       <option value="sa" >Saudi Arabia</option>
       <option value="gr" >Greece</option>  
       <option value="nl" >Netherlands</option>
       <option value="za" >SouthAfrica</option>
       <option value="au" >Australia</option>
       <option value="hu" >Hongkong</option>
       <option value="nz" >New Zealand</option>
       <option value="kr" >South Korea</option>
       <option value="at" >Austria</option>
       <option value="hu" >Hungary</option>
       <option value="ng" >Nigeria</option>
       <option value="se" >Sweden</option>
       <option value="be" >Belgium</option>
       <option value="no" >Norway</option>
       <option value="ch" >Switzerland</option>
       <option value="br" >Brazil</option>
       <option value="id" >Indonesia</option>
       <option value="ph" >Philippines</option>
       <option value="tw" >Taiwan</option>
    </select>

   
    </div>
    </div>
  )
}
