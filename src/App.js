import { useState } from 'react';
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import './App.css';

function App() {
  const [inputChecked, setInputChecked] = useState("")

  function handleChangeValue(event){
    setInputChecked(event.target.value)
  }

  return (
    <div className="App">
      <div className="inputDiv">
        <label htmlFor="Linkedin"><BsLinkedin /></label>
        <input 
          type="radio" 
          name="Linkedin" 
          value="Linkedin"
          checked={inputChecked === "Linkedin"}
          onChange={handleChangeValue}
        />
        </div>
      <div className="inputDiv">  
        <label htmlFor="Instagram"><BsInstagram /></label>
        <input 
          type="radio" 
          name="Instagram" 
          value="Instagram"
          checked={inputChecked === "Instagram"} 
          onChange={handleChangeValue} 
        />
      </div>
      {
        !inputChecked ? "" : 
          <h1>Selected {inputChecked === "Linkedin" 
            ? <BsLinkedin /> 
            : <BsInstagram />} 
          </h1>
      }  
    </div>
  );
}

export default App;
