const startButton = document.getElementById("start")
const nextButton = document.getElementById("next-button")
const questionsElement = document.getElementById('questions')
const instructionsElement = document.getElementById("instructions")
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')
const btn = document.getElementsByClassName('btn')
const answers = document.getElementsByClassName('answers')


startButton.addEventListener('click', startGame)



function startGame() {
    console.log('Started')
    instructionsElement.classList.add('hidden')
    questionsElement.classList.remove('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    startCountdown();
    setNextQuestion();

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '8', correct: false },
            { text: '12', correct: false },
        ]
    },

    {
        question: 'What is 4 + 4',
        answers: [
            { text: '4', correct: false },
            { text: '22', correct: false },
            { text: '8', correct: true },
            { text: '16', correct: false },
        ]
    },

    {
        question: 'What is 6 * 2',
        answers: [
            { text: '4', correct: false },
            { text: '22', correct: false },
            { text: '8', correct: false },
            { text: '12', correct: true },
        ]
    },

    {
        question: 'What is 1 + 2',
        answers: [
            { text: '4', correct: false },
            { text: '22', correct: false },
            { text: '3', correct: true },
            { text: '12', correct: false },
        ]
    },

    {
        question: 'What is 1 + 4',
        answers: [
            { text: '4', correct: false },
            { text: '22', correct: false },
            { text: '5', correct: true },
            { text: '16', correct: false },
        ]
    },

    {
        question: 'What is 12 * 2',
        answers: [
            { text: '4', correct: false },
            { text: '24', correct: false },
            { text: '8', correct: false },
            { text: '12', correct: true },
        ]
    }
]

function setNextQuestion() {
    resetState()
    
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
debugger;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerElement.appendChild(button)
        

    })

}

function resetState() {
    nextButton.classList.add('hidden')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(event) {
    //instructionsElement.classList.remove('hidden')
    //questionsElement.classList.add('hidden')
    debugger;
    console.log(shuffledQuestions);
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //for (i = 0; i < shuffledQuestions.length; i++) {
        
        //resetState()
        //showQuestion(shuffledQuestions[i])
        //console.log(i);
        

    }
    
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}    


function endQuiz() {

}







// Countdown 
let time = (1 + (1 / 60));
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;
let counting = document.getElementById("timer");

function startCountdown() {


    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            //showScores();
            //startGame();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            if (sec < 10) {
                sec = "0" + sec;
            }
            //else{sec = sec;}
            let min = Math.floor(quizTime / 60) % 60;
            if (min < 10) {
                min = "0" + min;
            }
            counting.innerHTML = `${min} : ${sec}`;

        }
    }, 1000)
}

//startCountdown();