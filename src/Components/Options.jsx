import { useState } from "react";

function Options(props) {

    const [selected, setSelected] = useState('');
    const inputSelected = (event) => {
         console.log('hice click')
         setSelected(selected)
        }
  
  return (
    <div>
      <input
        className="hidden "
        type="radio"
      />
      <label htmlFor={props.option}   className= {`label ${onClick={inputSelected}} ? 'selected' : ("") `} >
        <span className="absolute left-6 text-2xl">
          {" "}
          {props.questionNumber}
        </span>
        {props.option}{" "}
      </label>
    </div>
  );
}

export default Options;
