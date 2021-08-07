
const quizJs=[
     {
         question: "Q1: What is the full form of HTML",
         a: "Helo to My land",
         b: "Hey text mark up language",
         c: "Hyper text markup language",
         d: "Hyper text makeup language",
         ans: "ans3",
     },
     {
        question: "Q2: What is the full form of CSS",
        a: "Cascading style sheets",
        b: "Cascading style sheep",
        c: "Cartoon style sheets",
        d: "Cascading super sheets",
        ans: "ans1",
    },
    {
        question: "Q3: What is the full form of JS",
        a: "Cascading style sheets",
        b: "Cascading style sheep",
        c: "Cartoon style sheets",
        d: "Cascading super sheets",
        ans: "ans4",
    },
 ]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
let answers=document.querySelectorAll(".answer")
let showScore=document.querySelector("#showScore")


let questionCount=0;
let score=0;
const loadQuestion = () => {
    const questionList=quizJs[questionCount]
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckAnswer=() => {
    let answer;
    answers.forEach(curAnsElm => {
        // console.log(curAnsElm);
        
        if(curAnsElm.checked){
          answer = curAnsElm.id;
        }
    });
    return answer;
};
const deSelectAll=()=>{
    answers.forEach((curAnsElm)=>curAnsElm.checked=false)
}
submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizJs[questionCount].ans){
        score++;
    }

    deSelectAll()
    questionCount++;
    if(questionCount<quizJs.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`<h3>You scored ${score}/${quizJs.length}</h3>
        <button class="btn" onclick="location.reload()">Play again </button>`;
        showScore.classList.remove('scoreArea')
    }
});





