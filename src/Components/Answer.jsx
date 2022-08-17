import { useInfo } from "../context/AnswerContext";
import { useState } from "react";

export function Answers() {
  const value = useInfo();
 const [isCorrect, setIsCorrect] = useState(0)
  const [count, setCount ] = useState(0)  
  console.log(value)

  /*  añadir puntuacion  */
 
   if (value.lenght) {
    setIsCorrect( isCorrect + 1);
  } else{
  }
 
  return (
    <div>
      <p>Obtuviste {isCorrect } de 5 </p>
    </div>
  );
}

export default Answers;

/* SI selecciona respuesta correcta se muestra una tilde SINO cruz.   */
