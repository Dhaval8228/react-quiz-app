import { useState, useEffect, Fragment } from 'react'
import Welcome from './components/Welcome/Welcome'
import Quiz from './components/Quiz/Quiz'

function App() { 
  const [quizButton, setQuizButton] = useState(true)

  const start = () => {
      setQuizButton(false)
  }

  return (
    <div className="App">
      {
        quizButton ? <Welcome startQuiz={start}/> : <Quiz />
      }
    </div>
  );
}

export default App;
