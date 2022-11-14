const startButton = document.getElementById("start")
const instructionsElement = document.getElementById("instructions")
const questionsElement = document.getElementById('questions')
const question = document.getElementById('question')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const button3 = document.getElementById("btn3")
const button4 = document.getElementById("btn4")
const answerBtns = document.getElementById('answer-buttons')
const answerConfElement = document.getElementById("answerConfirmation")
const quizElement = document.getElementById("quizdone")
const scoredElement = document.getElementById('scored')
var initialsInput = document.querySelector("#textarea")
const submitButton = document.querySelector("#submit")
const highScoreBtn = document.querySelector('#highscore')
const containerHighScores = document.querySelector('.highscorepage')
const hscoreListElement = document.querySelector('#hscoreslist')
const goBackBtn = document.querySelector('#goback')
const clearScores = document.querySelector('#clear')
let indexSamples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var questionNow = undefined;
var indexNow = 0;
var correctAns = 0;
var scoreNow = 0;
var rightAnswers = 0;
var initials = undefined;
var initialsNow = "UNKNOWN";
var allScores = [];

startButton.addEventListener('click', startGame)
button1.addEventListener('click', btn1)
button2.addEventListener('click', btn2)
button3.addEventListener('click', btn3)
button4.addEventListener('click', btn4)
// Start game
function startGame() {
    console.log('Started')
    quizTime = (241);
    instructionsElement.classList.add('hidden')
    questionsElement.classList.remove('hidden')
    highScoreBtn.classList.add('hidden')
    shuffledIndex();
    console.log(indexSamples);
    currentQuestionIndex = 0
    startCountdown();
    setNextQuestion();

}
// Sort questions
function shuffledIndex() {
    indexSamples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    indexSamples.sort(() => Math.random() - 0.5);
}
///quiz questions
const questions = [
    {
        question: 'How do you call a function named "myFunction"?',
        answer1: 'call function myFunction()',
        answer2: 'myFunction()',
        answer3: 'function (myFunction)',
        answer4: 'function (myfunction)',
        correct: 2,
        index: 1,
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        answer1: 'if(i == 7)',
        answer2: 'if i == 7 then',
        answer3: 'if i == 7',
        answer4: 'if i = 7',
        correct: 1,
        index: 2,
    },
    {
        question: 'How to write an "IF" statement for executing some code if "i" is NOT equal to null?',
        answer1: 'if i =! null',
        answer2: 'if (i =>! null)',
        answer3: 'if (i != null)',
        answer4: 'if i <> null',
        correct: 3,
        index: 3,
    },
    {
        question: 'How does a WHILE loop start?',
        answer1: 'while for i = 7, i++',
        answer2: 'while i = 1',
        answer3: 'while (i < 7)',
        answer4: 'while() = i < 7',
        correct: 3,
        index: 4,
    },
    {
        question: 'How does a FOR loop start?',
        answer1: 'for i = 1 to 10',
        answer2: 'for (i = 0; i <= 5; i++)',
        answer3: 'for (i = +; i <= 5)',
        answer4: 'for (i <= 10; i++)',
        correct: 2,
        index: 5,
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        answer1: '<!--This is a comment-->',
        answer2: '"This is a comment"',
        answer3: '//This is a comment',
        answer4: '//This is a comment//',
        correct: 3,
        index: 6,
    },

    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer1: '<scripting>',
        answer2: '<script>',
        answer3: '<js>',
        answer4: '<javascript>',
        correct: 2,
        index: 7,
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer1: '<head>',
        answer2: '<body>',
        answer3: '<div>',
        answer4: '<head> and <body>',
        correct: 4,
        index: 8,
    },
    {
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answer1: '<script src="script.js">',
        answer2: '<script href="script.js">',
        answer3: '<script name="script.js">',
        answer4: '<script text-code src="script.js">',
        correct: 1,
        index: 9,
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answer1: 'Yes because HTML only recognize <script>',
        answer2: 'False, only HTML must have a <script> tag',
        answer3: 'Both JavaScript and HTML should have <script> tag',
        answer4: '<script> not always required',
        correct: 2,
        index: 10,
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer1: 'alertBox("hello World")',
        answer2: 'alert("Hello World")',
        answer3: 'msgBox("Hello World)',
        answer4: 'msg("Hello World)',
        correct: 2,
        index: 11,
    },
    {
        question: 'How do you create a function called myFunction in JavaScript?',
        answer1: 'function: myFunction()',
        answer2: 'function = myFunction()',
        answer3: 'function myFunction()',
        answer4: 'function (myFunction)',
        correct: 3,
        index: 12,
    },


]
// Start quiz and sort questions
function setNextQuestion() {
    
    if (indexSamples.length > 0) {
        showQuestion()
    }
    else {
        endQuiz()
    }
}

function showQuestion() {
    console.log(indexSamples);
    console.log(indexSamples[0]);
    let questionNow = questions.find((indexNum) => {
        indexNow = (indexSamples[0])
        console.log(indexNow)
        return indexNum.index === indexNow
    });

    question.textContent = questionNow.question;
    answer1.textContent = questionNow.answer1;
    answer2.textContent = questionNow.answer2;
    answer3.textContent = questionNow.answer3;
    answer4.textContent = questionNow.answer4;
    console.log(questionNow.correct);
    correctAns = questionNow.correct;
    console.log(questionNow);
    indexSamples = indexSamples.slice(1, 6);
    console.log(indexSamples);
    console.log("Right answer" + rightAnswers);
}
// Record results per question
async function btn1() {

    console.log(correctAns);
    if (correctAns === 1) {
        console.log('You Win!!!!!');
        answerConfElement.classList.add('correct')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Correct Answer!"
        await sleep(500);
        answerConfElement.classList.remove('correct')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        rightAnswers++;
    }
    else {
        console.log('Wrong Answer!');
        answerConfElement.classList.add('wrong')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Wrong Answer!"
        await sleep(500);
        answerConfElement.classList.remove('wrong')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        quizTime = (quizTime - 10); //as requested
    }

    setNextQuestion()
}

async function btn2() {

    console.log(correctAns);
    if (correctAns === 2) {
        console.log('You Win!!!!!');
        answerConfElement.classList.add('correct')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Correct Answer!"
        await sleep(500);
        answerConfElement.classList.remove('correct')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        rightAnswers++;
    }
    else {
        console.log('Wrong Answer!');
        answerConfElement.classList.add('wrong')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Wrong Answer!"
        await sleep(500);
        answerConfElement.classList.remove('wrong')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        quizTime = (quizTime - 10); //as requested
    }

    setNextQuestion()
}

async function btn3() {

    console.log(correctAns);
    if (correctAns === 3) {
        console.log('You Win!!!!!');
        answerConfElement.classList.add('correct')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Correct Answer!"
        await sleep(500);
        answerConfElement.classList.remove('correct')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        rightAnswers++;
    }
    else {
        console.log('Wrong Answer!');
        answerConfElement.classList.add('wrong')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Wrong Answer!"
        await sleep(500);
        answerConfElement.classList.remove('wrong')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        quizTime = (quizTime - 10); //as requested
    }

    setNextQuestion()
}

async function btn4() {

    console.log(correctAns);
    if (correctAns === 4) {
        console.log('You Win!!!!!');
        answerConfElement.classList.add('correct')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Correct Answer!"
        await sleep(500);
        answerConfElement.classList.remove('correct')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        rightAnswers++;
    }
    else {
        console.log('Wrong Answer!');
        answerConfElement.classList.add('wrong')
        answerConfElement.classList.remove('hidden')
        answerBtns.classList.add('hidden')
        answerConfElement.textContent = "Wrong Answer!"
        await sleep(500);
        answerConfElement.classList.remove('wrong')
        answerConfElement.classList.add('hidden')
        answerBtns.classList.remove('hidden')
        quizTime = (quizTime - 10); //as requested 
    }

    setNextQuestion()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// results and score after quiz
function endQuiz() {
    
    questionsElement.classList.add('hidden')
    quizElement.classList.remove('hidden')
    quizElement.classList.add('show')
    console.log(quizTime);
    scoreNow = quizTime * rightAnswers;
    console.log(scoreNow);
    scoredElement.textContent = "You scored:" + " " + scoreNow + " " + "points!";
    quizTime = -1;
    counting.innerHTML = `00 : 00`;
    rightAnswers = 0;
}
// Store highscores after submit
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initialsInput = document.querySelector("#textarea").value;

    if (initialsInput === "") {
        localStorage.setItem("initials", initialsNow);
        var initials = localStorage.getItem("initials");
        console.log(initials);

    }
    else {
        initialsNow = initialsInput;
        localStorage.setItem("initials", initialsNow);
        var initials = localStorage.getItem("initials");
        console.log("initials: " + initials);
    }

    storeScores()
    quizElement.classList.add('hidden')
    quizElement.classList.remove('show')
    instructionsElement.classList.remove('hidden')
    highScoreBtn.classList.remove('hidden')
});


function storeScores() {

    allScores = localStorage.getItem('allScores');
    allScores = (JSON.parse(allScores));
    var allScoresTemp = {
        "initialsall": initialsNow,
        "scoreall": scoreNow

    }
    if (allScores == undefined) {
        var lengthA = 0;
        allScores = [];
    } else if (allScores == null) {
        var lengthA = 0;
        allScores = [];
    } else {
        var lengthA = allScores.length;
    }
    allScores[lengthA] = {
        "initialsall": initialsNow,
        "scoreall": scoreNow
    }

    allScores = JSON.stringify(allScores);
    localStorage.setItem('allScores', allScores);
    allScores = localStorage.getItem('allScores');
    allScores = (JSON.parse(allScores));
    console.log("allScores this:" + (allScores[(lengthA)].scoreall));
    console.log("allScores" + (allScores[(lengthA)].initialsall));
    allScores = JSON.stringify(allScores);
    console.log("allScores object: " + allScores);
    initialsNow = "";
    scoreNow = "";
    console.log("allScores string: " + allScores);
}
// Show high scores
highScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    instructionsElement.classList.add('hidden')
    containerHighScores.classList.remove('hidden')
    containerHighScores.classList.add('show')
    showScores();
    
});

function showScores() {
    highScoreBtn.classList.add('hidden')
    allScores = localStorage.getItem('allScores');
    allScores = (JSON.parse(allScores));
    console.log("Score list: " + allScores);

    if (allScores == undefined) {
        var lengthA = 0;
        allScores = [];
    } else if (allScores == null) {
        var lengthA = 0;
        allScores = [];
    } else {
        var byScores = allScores.sort((a, b) => {
            return b.scoreall - a.scoreall;
        });
        console.log("ByScores: "+ byScores);
        allScores = byScores;
        for (var i = 0; i < allScores.length; i++) {
            var scores = document.createElement('p');
            scores.id = ("listing");
            scores.innerHTML = (allScores[i].initialsall + ' scored: ' + allScores[i].scoreall + ' points!');
            hscoreListElement.append(scores)
        }

        
    }

    
    localStorage.setItem('allScores', JSON.stringify(allScores));
    console.log("Score list stringified: " + allScores);
};
// Go back to start
goBackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    goBack()
});

function goBack() {
    containerHighScores.classList.add('hidden')
    containerHighScores.classList.remove('show')
    instructionsElement.classList.remove('hidden')
    highScoreBtn.classList.remove('hidden')
    const child = document.querySelector("#listing");
    console.log(child);
    
    if (child !== null) {
        child.remove()
        goBack()
    } else if (child == null) {
        return;
    }
}
// Clear Scores
clearScores.addEventListener("click", function (event) {
    event.preventDefault();
    clearRecords()
});

function clearRecords() {
    localStorage.removeItem('allScores');
    const child = document.querySelector("#listing");
    console.log(child);
    
    if (child !== null) {
        child.remove()
        clearRecords()
    } else if (child == null) {
        return;
    }
    
    showScores()
}

// Countdown 
let time = (1 + (1 / 60));
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;
let counting = document.getElementById("timer");

function startCountdown() {


    let quizTimer = setInterval(function () {
        if (quizTime == 0) {
            clearInterval(quizTimer);
            endQuiz();
            //startGame();

        } else if (quizTime <= 0) {
            clearInterval(quizTimer);

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

