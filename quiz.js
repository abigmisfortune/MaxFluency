onload = function() {

    document.getElementById("tuttut").onclick = function () {
        location.href = "tutorial.html"};
    
    document.getElementById("hm").onclick = function () {
            location.href = "index.html"};
    
}


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    

    }
 
    this.questionIndex++;
}


Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " +  quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    
};

function saveScore(){
let retrievedObject = JSON.parse(window.localStorage.getItem(quiz.score));

if(!retrievedObject ){
alert('Empty, initializing');
retrievedObject  = [];
}

retrievedObject.push(quiz.score);
window.localStorage.setItem('score', JSON.stringify(quiz.score));
};


// create questions here
var questions = [
    new Question("Which is not part of non-verbal communication?", ["Height", "Body Language", "Gestures", "Eye contact"], "Height"),
    new Question("What is vital for survival and it is one thing in life that we cannot avoid to do?", 
    ["Written Communication", "Human Communication", "Communication Climate", "Telephone Conversation"], "Human Communication"),
    new Question("It is the use of sounds and words to express yourself.", ["Verbal Communication", "Non-Verbal Communication", "Written Communication", "Visual Communication"], "Verbal Communication"),
    new Question("What refers to the one who initiates the communication?", ["Sender", "Receiver", "Noise", "Message"], "Sender"),
    new Question("What are means through which we transmit the message in either vocal or non-vocal messages?", ["Message", "Channel", "Sender", "Noise"], "Channel"),
    new Question("Which event requires verbal communication?", ["Calling someone on the phone", "Hurrying  to your classroom","Listening to a radio program", "Running to a track meet"],"Calling someone on the phone"),  
    new Question("All are examples of non-verbal communication except?", ["Reciting in class", "Frowning", "Hugging a friend", "Clapping"],"Reciting in class"),  
    new Question("It is the Latin word of communication.", ["Epikoinonía", "Communis", "La communication", "Komyunikēshon"], "Communis"),
    new Question("The word communication is derived from communis (Latin) which means?", ["Community","Message", "Common", "Oral Speech"],"Common"),
    new Question("Communicare means to _______", ["common", "care about many", "communicate", "make common to many", "comment"], "make"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();


