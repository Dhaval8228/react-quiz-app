import { useState, useEffect, Fragment } from "react"
import './Quiz.css'
import ProgressBar from "./ProgressBar";

function Quiz() {
    const [loading,setLoading] = useState(true)
    const [quiz,setQuiz] = useState([])
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [result,setResult] = useState(false)
    const [timer,setTimer] = useState(15)

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_QUIZ_API_KEY
        fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=15&tags=Javascript`)
        .then(res => res.json())
        .then(data => {
            setQuiz(data)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        let startTimer = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        if(currentQuestion === 14 && timer === 0) {
            setResult(true)
        }

        if(timer === 0) {
            clearInterval(startTimer)
            setTimer(15)
            setCurrentQuestion(currentQuestion + 1)
        }

        return () => clearInterval(startTimer)
    }, [timer])
    
    const handleClick = (key) => {
        let nextQuestion = currentQuestion + 1

        setTimer(15)
        
        if (nextQuestion < 15) {
            setCurrentQuestion(nextQuestion)
        } else {
            setResult(true)
        }
    }

    return (
        <Fragment>
            {
                result ? 
                (
                    <div className='flex-center' style={{ height: '100vh' }}>
                        <p className='results-page'>Thanks for taking the quiz!!!</p>
                    </div>) 
                : 
                (
                    <Fragment>
                        <p className='quiz-title flex-center'>Welcome to the Javascript Quiz App</p>
                        <div className='flex-center progress-bar'>
                            <span className='progress-bar-text'>Question: {currentQuestion + 1}/15</span>
                            <ProgressBar bgcolor={"blue"} completed={(currentQuestion/15 * 100)}/>
                        </div>
                        <div className='flex-center' style={{height: '75vh'}}>
                            {
                                (!loading && quiz.length > 0) ? (
                                <div className='question-container'>
                                    <div className='individual-question flex-column'>
                                        {quiz[currentQuestion].question}
                                        <p className='time-left'>Time Left: {timer} sec</p>
                                    </div>
                                    
                                    <div className='answers'>
                                    {
                                        Object.entries(quiz[currentQuestion].answers).map(([key, value]) => {
                                        return value ? <button key={key} className='individual-answer' onClick={(event) => {handleClick(event)}}>{value}</button> : null
                                        })
                                    }
                                    </div>
                                </div>
                                ) : <div> Loading </div>
                            }
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default Quiz