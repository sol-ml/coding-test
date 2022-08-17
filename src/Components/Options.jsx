
function Options (props) {
     
      return( 
          <div>
             <input
                className= "hidden" 
                type="radio"
              />
             <label onClick= { props.selected } htmlFor={props.option} className="label">
                <span className="absolute left-6 text-2xl" 
                > {props.questionNumber}</span>  
               {props.option} </label>
          </div>
      )
  }

  export default Options