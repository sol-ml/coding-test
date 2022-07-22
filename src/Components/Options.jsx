import { useState } from 'react'


function Options ({ questionNumber, option}) {
      const [select, setSelect] = useState(false);
      return( 
          <div>
             <input
                className= "hidden" 
                type="radio"
              />
             <label htmlFor={option} className="label" onClick={() => setSelect(!select)}>
                <span className="absolute left-6 text-2xl"> {questionNumber}</span>  
               {option} </label>

          </div>
      )
  }

  export default Options