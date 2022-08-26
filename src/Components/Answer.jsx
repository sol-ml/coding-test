import { useInfo } from "../context/AnswerContext";
import { useState, useEffect } from "react";

export function Answers() {
  const value = useInfo();
  const [isCorrect, setIsCorrect] = useState(useInfo());
  const [count, setCount] = useState(0);
  console.log(value);

  /*  añadir puntuacion  */

/*   useEffect(() => {
    setCount(count + 1);
  }, [value.question1]);

  const answer = ()=>{
    setIsCorrect( { ...value.data } )
  } */
  return (
    <div> 
      <p>Obtuviste {isCorrect} de 5 </p>
    </div>
  );
}

export default Answers;

/* SI selecciona respuesta correcta se muestra una tilde SINO cruz.   */
