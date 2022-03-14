const quizDate = [
    {
        question:'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct:'c'

    },
    {
        question:'What is the best Programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct:'d'

    },
    {
        question:'Who is the current president of USA?',
        a: 'Trump Donard',
        b: 'Barack Obama',
        c: 'Joe Baiden',
        d: 'John U',
        correct:'c'
    },
    {
        question:'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascanding Style Sheet',
        c: 'Javascript Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborg',
        correct:'a'

    },
    {
        question:'What year was Javascript launched?',
        a: '1997',
        b: '1982',
        c: '1995',
        d: 'none of the above',
        correct:'c'

    }
]

const question_text = document.getElementById('question_text')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const answerRadio = document.querySelectorAll('.answer') 

const submitBtn = document.getElementById('submit');

const quizEl = document.getElementById('quiz-el');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselect();
    const currentQuestionData = quizDate[currentQuestion];

    question_text.innerHTML = currentQuestionData.question;
    a_text.innerHTML = currentQuestionData.a;
    b_text.innerHTML = currentQuestionData.b;
    c_text.innerHTML = currentQuestionData.c;
    d_text.innerHTML = currentQuestionData.d;
    
}

function getSelected(){
    let result;
    answerRadio.forEach(answer =>{
        if(answer.checked){
            result = answer.id;
        }  
    })
    return result;
}

function deselect(){
    answerRadio.forEach(answer =>{
        answer.checked = false;
})
};
submitBtn.addEventListener('click',() =>{
    const answer = getSelected();

    if(answer){
    if(answer === quizDate[currentQuestion].correct){
        score++
    }
        currentQuestion++
        if(currentQuestion < quizDate.length){
            loadQuiz()
        }else{
            if(score >=3){
                quizEl.innerHTML =`<h3>You have scored at ${score} out 5 💃🏾 🍾 </h3><button onclick='window.location.reload()'>Reload</button>`;
            }else{
                quizEl.innerHTML =`<h3>You have scored at ${score} out 5 🤦🏾‍♂️ 🤯</h3> <button onclick='window.location.reload()'>Reload</button>`;
            }

        }  
        }else{
        console.log('Nothing selected')
        }   
})

