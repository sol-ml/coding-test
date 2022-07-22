import { useInfo } from '../context/AnswerContext'

function Answers() {

const value = useInfo();
 console.log(value) 
  
   if (value) {} 
   
  return (
      <div>
        <span>
        {value && <p>Obtuviste {value.data.question1} de 5 </p>}
    {/*      { value {`${value.data}`} de {`$`}} */}
        </span>
      </div>
  )
}

export default Answers;

/* SI selecciona respuesta correcta se muestra una tilde SINO cruz.   */
