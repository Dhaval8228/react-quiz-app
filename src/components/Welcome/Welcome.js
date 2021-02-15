import { Fragment } from 'react'
import './Welcome.css'

function Welcome({ startQuiz }) {
    return (
        <Fragment>
            <p className='quiz-title flex-center'>Welcome to the Javascript Quiz App</p>
            <div className="flex-center" style={{ height: '75vh' }}>
                <button className='start-quiz-button' onClick={startQuiz}>Start Quiz</button>
            </div>
        </Fragment>
    )
}

export default Welcome