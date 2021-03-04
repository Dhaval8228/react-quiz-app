const questions = [
    {
        questionText: 'What does `` refers to in javascript',
        answerOptions: [
            { answerText: 'Template literals', isCorrect: true },
            { answerText: 'Single quotes', isCorrect: false },
            { answerText: 'Double quotes', isCorrect: false },
            { answerText: 'Strings', isCorrect: false },
        ]
    },
    {
        questionText: 'How to declare an array in javascript',
        answerOptions: [
            { answerText: 'var arr = [ 1, 2, 3 ]', isCorrect: true },
            { answerText: 'var arr = { 1, 2, 3 }', isCorrect: false },
            { answerText: '[ 1, 2, 3 ]', isCorrect: false },
            { answerText: 'var arr = ( 1, 2, 3 )', isCorrect: false },
        ]
    },
    {
        questionText: 'What is the DOM in javascript',
        answerOptions: [
            { answerText: 'Data Object Model', isCorrect: false },
            { answerText: 'Data Overload Method', isCorrect: false },
            { answerText: 'Document Object Model', isCorrect: true },
            { answerText: 'Document Object Method', isCorrect: false },
        ]
    },
    {
        questionText: 'What is the full form of JS',
        answerOptions: [
            { answerText: 'Java Script', isCorrect: true },
            { answerText: 'Java Scripting', isCorrect: false },
            { answerText: 'Java Server', isCorrect: false },
            { answerText: 'Java Servlet', isCorrect: false },
        ]
    },
    {
        questionText: 'Is Javascript case-sensitive',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ]
    },
    {
        questionText: 'How to write an arrow function in javascript',
        answerOptions: [
            { answerText: 'func add() {}', isCorrect: false },
            { answerText: 'function add() {}', isCorrect: false },
            { answerText: '() => {}', isCorrect: false },
            { answerText: 'const add = () => {}', isCorrect: true },
        ]
    },
    {
        questionText: 'What is the value of Boolean(5 > 2)',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ]
    },
    {
        questionText: 'Is Javascript single-threaded',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
        ]
    },
    {
        questionText: 'Is Javascript asynchronous language',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ]
    },
    {
        questionText: 'Why can we access functions in javascript before declaring them',
        answerOptions: [
            { answerText: 'Functions are partially hoisted', isCorrect: false },
            { answerText: 'Functions are fully hoisted', isCorrect: true },
            { answerText: 'We cannot access javascript functions before declaring them', isCorrect: false },
            { answerText: 'Because functions are the heart of javascript ;)', isCorrect: false },
        ]
    },
    {
        questionText: 'What if we try to give some value to an already defined constant variable',
        answerOptions: [
            { answerText: 'It will throw the reference error', isCorrect: false },
            { answerText: 'It will throw the not defined error', isCorrect: false },
            { answerText: 'It will throw the type error', isCorrect: true },
            { answerText: 'The constant variable will hold the new value', isCorrect: false },
        ]
    },
    {
        questionText: 'Are let and const block scoped',
        answerOptions: [
            { answerText: 'Yes, let and const are block scoped', isCorrect: true },
            { answerText: 'No, let and const are function scoped', isCorrect: false },
        ]
    },
    {
        questionText: 'How to get the id of an HTML element using javascript DOM',
        answerOptions: [
            { answerText: `document.getElementById('Id name')`, isCorrect: true },
            { answerText: `document.getelementbyid('Id name')`, isCorrect: false },
            { answerText: `document.getElementsById('Id name')`, isCorrect: false },
            { answerText: `document.GetElementById('Id name')`, isCorrect: false },
        ]
    },
    {
        questionText: 'Is Javascript strongly typed language',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
        ]
    },
    {
        questionText: 'Where do we include the javascript file in our html document',
        answerOptions: [
            { answerText: 'head', isCorrect: false },
            { answerText: 'body', isCorrect: true },
        ]
    }
]

export default questions