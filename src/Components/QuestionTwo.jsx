import { Link, useParams } from 'react-router-dom'
 import Speak from '../speak.json'
 import Options from './Options'

 export function Questionstwo () {
  const { id } = useParams(); 

   
  const questions = Object.entries(Speak)
  console.log(questions)
  return (
      <div className="relative flex flex-col justify-center items-center m-2 p-4 max-w-[1024px] h-[500px] text-center mx-auto bg-white rounded-xl"
      id="question1">
      <p className="absolute top-6 left-6 flex justify-center items-center w-12 h-12 rounded-full text-3xl font-bold text-white bg-[#16E9CB]">
      
      </p>
 
     {questions.map( (elem, index) => (
      index === 1 && (
       <div key= {index} >
        <p className="question"> {elem[1].question}</p>
       <Options option={elem[1].a} questionNumber={"a"} />
       <Options option={elem[1].b} questionNumber={"b"} />
       <Options option={elem[1].c} questionNumber={"c"} />
      </div>
       )
      )
     )} 

      <button onClick  className="uppercase next-button mt-12">
       <Link key= {id} to={ `${id + 1 }` } > 
         Siguiente 
       </Link>
      </button>

  </div>
  )
      }

export default Questionstwo