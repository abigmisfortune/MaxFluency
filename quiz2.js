onload = function() {

    document.getElementById("tuttut2").onclick = function () {
        location.href = "tutorial.html"};
    
    document.getElementById("hm2").onclick = function () {
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
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function saveScores(){
    localStorage.setItem("Your scores:", JSON.stringify(quiz.score));
    console.log(localStorage);
    };


 
// create questions here
var questions = [
    new Question("It is the process by which the receiver interprets or assigns meanings to the codes transported by the source.", ["Transmission", "Responding", "Decoding","Encoding"], "Decoding"),
    new Question("It is a response is anticipated by the sender from the receiver.", 
    ["Transmission", "Feedback", "Decoding", "Encoding"], "Feedback"),
    new Question("Which is not part of the elements of communication?", ["Speaker", "Message", "Clothing", "Feedback"], "Clothing"),
    new Question("What refers to the one who initiates the communication?", ["Sender", "Receiver", "Noise", "Message"], "Sender"),
    new Question("What are means through which we transmit the message in either vocal or non-vocal messages?", ["Message", "Channel", "Sender", "Noise"], "Channel"),
    new Question("What is made of ideas and feelings that a sender wants to share with others?", ["Noise", "Channel", "Sender", "Message"], "Message"),
    new Question("Who provides sender with feedback which may prompt the sender to clarify the message or signal to carry on as planned?", ["Receiver", "Sender", "Noise", "Channel"], "Receiver"),
    new Question("What is the interference that bars the message from being understood and interpreted?", ["Receiver", "Noise", "Feedback", "Sender"], "Noise"),
    new Question("Mili wants to confess to Vlad on Valentine's Day, she chose to confess through a letter. The letter is the _______", ["Receiver", "Noise", "Sender", "Channel"], "Channel"),
    new Question("Liam gave Arnold a disgusted expression after Arnold shared a racist meme. The expression is a _________", ["Channel", "Noise", "Feedback", "Sender"], "Feedback")

];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

