import { Link, useParams } from 'react-router-dom'
import Speak from '../speak.json'
import Options from './Options'

export function QuestionBlock() {
 
  const questions = Object.entries(Speak);
  const { id } = useParams();
  const urlId = parseInt(id) + 1 ;
  console.log(questions.length);

  return (
    <div
      className="relative flex flex-col justify-center items-center m-2 p-4 max-w-[1024px] h-[500px] text-center mx-auto bg-white rounded-xl"
      id="question1"
    >
      <p className="absolute top-6 left-6 flex justify-center items-center w-12 h-12 rounded-full text-3xl font-bold text-white bg-[#16E9CB]">
        {urlId}
      </p>

      <div className=" w-full max-w-[600px]">
        <p className="question"> {questions[id][1].question}</p>
        <Options
          className= 'selected'
          option={questions[id][1].a}
          questionNumber={"a"}
        />
        <Options
          option={questions[id][1].b}
          questionNumber={"b"}
        />
        <Options
          option={questions[id][1].c}
          questionNumber={"c"}
        />
      </div>
      <button className="uppercase next-button mt-12">
        <Link to={`/beginner-test/${urlId}`}>
          {questions.length <= 5 ? "Siguiente" : "Finalizar"}
        </Link>
      </button>
    </div>
  );
}

export default QuestionBlock;
