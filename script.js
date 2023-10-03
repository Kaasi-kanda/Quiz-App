const questions = [

    {
    
    question: "Which languages are used for Frontend Development?", answers: [
    { text: "HTML", correct: false},
    { text: "CSS", correct: false},
    { text: "Javascript", correct: false},
    { text: "All the above", correct: true},
    
    ]
},
{
    
    question: "Who is the  present Prime Minister of India?", answers: [
    { text: "Narendra Modi", correct: true},
    { text: "Manmohan Singh", correct: false},
    { text: "Sarojini Naidu", correct: false},
    { text: "Ram Gopal Varma", correct: false},
    
    ]
},
{
    
    question: "Who is the CEO of Google?", answers: [
    { text: "Billgates", correct: false},
    { text: "Sundar Pichai", correct: true},
    { text: "Ratan Tata", correct: false},
    { text: "Satya Nadalla", correct: false},
    
    ]
},
{
    
    question: "Who is the founder of INDGG Technologies?", answers: [
    { text: "Manish Agarwal", correct: true},
    { text: "Mohit sharma", correct: false},
    { text: "Devendra", correct: false},
    { text: "Varun Sai", correct: false},
    
    ]
},
{
    
    question: "Which language is used for styling websites?", answers: [
    { text: "sql", correct: false},
    { text: "Css", correct: true},
    { text: "python", correct: false},
    { text: "c", correct: false},
    
    ]
}
    
];
const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function startQuiz(){

currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";

showQuestion();

}
function showQuestion(){
    resetState();

    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.
    question;
    currentQuestion.answers.forEach (answer => {

        const button = document.createElement("button");
         button.innerHTML = answer.text; 
         button.classList.add("btn"); 
         answerButtons.appendChild(button);
         if (answer.correct){
            button.dataset.correct=answer.correct;
         }
        button.addEventListener("click",selectAnswer);
        });
}
function resetState(){

    nextButton.style.display = "none";
    
    while (answerButtons.firstChild){
    
    answerButtons.removeChild (answerButtons.firstChild)
    }
}
function selectAnswer(e){

    const selectedBtn = e.target;
    
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if(isCorrect) {
    
    selectedBtn.classList.add("correct");
    score++;
    
    }else{
    
    selectedBtn.classList.add("incorrect");
    
    }
    Array.from(answerButtons.children).forEach (button => {

        if(button.dataset.correct === "true"){ button.classList.add("correct");
        
        }
        
        button.disabled = true;
        
        });
        
        nextButton.style.display = "block";
    }
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





    nextButton.addEventListener("click", ()=>{

        if(currentQuestionIndex < questions.length) {
        handleNextButton();
        
        }else{
        
        startQuiz();
        }
        
        });
startQuiz();