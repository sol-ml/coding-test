import { Link } from 'react-router-dom'
import Answers from './Answer'

function TestPage () {
  return (
    <div className="block mx-auto max-w-[1280px] p-2">
    <div
      className="flex flex-col justify-center items-center m-2 px-4 py-8 max-w-[1024px] h-[500px] text-center mx-auto bg-white rounded-xl">
      <h2 className="text-3xl text-[#726EFF] font-bold">Nivel Beginner</h2>
      <img
        src="avatar.png"
        className="w-56 p-2 my-4 border border-gray-500 rounded-sm"
        alt="avatar.png"
      />
      <button className="p-2 w-60 bg-[#726EFF] font-semibold text-xl text-white uppercase rounded-2xl">
           <Link to='/beginner-test'> Siguiente</Link>
      </button>
      <Answers/>
    </div>
  </div>
  );
}

export default TestPage;