import { Link, useParams } from 'react-router-dom'
import Speak from '../speak.json'
import Options from './Options'
import Answers from './Answer'
import { useState } from 'react'

export function QuestionBlock() {
  /*  const [select, setSelect] = useState(true) */

  const changeOptions = () => {
    alert(`seleccionaste`);
  };

  /*  const selected = () => {
  setSelect(select.option);
}; */

  const questions = Object.entries(Speak);
  const { id } = useParams();
  const urlId = (parseInt(id) + 1);

  return (
    <div
      className="relative flex flex-col justify-center items-center m-2 p-4 max-w-[1024px] h-[500px] text-center mx-auto bg-white rounded-xl"
      id="question1"
    >
      <p className="absolute top-6 left-6 flex justify-center items-center w-12 h-12 rounded-full text-3xl font-bold text-white bg-[#16E9CB]">
        {urlId}
      </p>

    {/*   {questions.map((elem, index) =>
        index === 0 ? (
            <div className=' w-full max-w-[600px]'>
              <p className="question"> {elem[1].question}</p>
              <Options  selected={changeOptions} option={elem[1].a} questionNumber={"a"} />
              <Options  selected={changeOptions} option={elem[1].b} questionNumber={"b"} />
              <Options  selected={changeOptions} option={elem[1].c} questionNumber={"c"} />  
            </div>
      )  : null )
           } */}

     <div className=" w-full max-w-[600px]">
        <p className="question"> {questions[id][1].question}</p>
        <Options
          selected={changeOptions}
          option={questions[id][1].a}
          questionNumber={"a"}
        />
        <Options
          selected={changeOptions}
          option={questions[id][1].b}
          questionNumber={"b"}
        />
        <Options
          selected={changeOptions}
          option={questions[id][1].c}
          questionNumber={"c"}
        />
      </div> 

      <button onClick className="uppercase next-button mt-12 ">
        <Link  to={urlId}>
          Siguiente
        </Link>
      </button>
      <Answers/>
    </div>
  );
}

export default QuestionBlock;
