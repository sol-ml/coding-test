import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import TestPage from './Components/TestPage'
import QuestionBlock from './Components/QuestionBlock'
import Answers from './Components/Answer'
import NotFound from './Components/NotFound'

function App()  {
  return (
      <div className='App block mx-auto max-w-[1280px] p-2'>
        <Header />
      <Routes>
        <Route path= '/' element= { <TestPage /> } />
        <Route path= '/beginner-test/:id' element= { <QuestionBlock /> } /> 
        <Route path= '/beginner-test/answer' element= { <Answers/> } /> 
        <Route path= '*' element= { <NotFound/>} /> 
       </Routes>
      </div> 
)
}


export default App
