import { useState, useEffect, Fragment } from "react"
import questions from './questions'
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
        setQuiz(questions)
        setLoading(false)
    })

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
    
    const handleClick = (isCorrectAnswer) => {
        if(isCorrectAnswer === true) {
            setScore(score + 1)
        }

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
                    <div className="flex-center" style={{height: '100vh'}}>
                        <div className='results-page flex-column'>
                            <h1>Results Page</h1>
                            <p>You scored 
                                <span style={{fontSize: '50px', padding: '10px'}}>{score}</span>out of
                                <span style={{fontSize: '50px', padding: '10px'}}>15</span>
                            </p>
                            {
                                score === 0 ? <p>Better luck next time :((</p>
                                    : score <= 10 ? <p>Keep learning!! You can do a lot better:)</p>
                                    : score >= 10 ? <p>Good job!! You are on a path to becoming a great developer one day :))</p>
                                    : score === 15 ? <p>Great job!! You truly are a javascript ninja ;)))</p>
                                    : ''
                            }
                        </div>    
                    </div>
                ) 
                : 
                (
                    <Fragment>
                        <p className='quiz-title flex-center'>Welcome to the Javascript Quiz App</p>
                        <div className='flex-center progress-bar'>
                            <span className='progress-bar-text'>Question: {currentQuestion + 1}/15</span>
                            <ProgressBar bgcolor={'rgba(0, 0, 175, 0.6)'} completed={(currentQuestion/15 * 100)}/>
                        </div>
                        <div className='flex-center'>
                            {
                                (!loading && quiz.length > 0) ? (
                                    <div>
                                        <div className="flex-center" style={{margin: '10px'}}>
                                            <p className='flex-center time-left'>Time Left: {timer} sec</p>
                                        </div>
                                        <div className='question-container'>
                                            <div className='individual-question flex-center'>{quiz[currentQuestion].questionText}</div> 
                                            <div className='answers'>
                                                {
                                                    quiz[currentQuestion].answerOptions.map(answer => {
                                                        return answer ? <button className='individual-answer' onClick={(event) => {handleClick(answer.isCorrect)}}>{answer.answerText}</button> : null
                                                    })
                                                }
                                            </div>
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