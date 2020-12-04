var myQuestions = [
    {
        question: "What is the tool used to view code on Google Chrome",
        answers: {
            a: 'Google Search',
            b: 'Inspect',
            c: 'Youtube'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is an array used for",
        answers: {
            a: 'to link multiple css files to html',
            b: 'to change font size',
            c: 'to store a collection of data'
        },
        correctAnswer: 'c'
    }
];

var button = document.querySelector('#start')
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


button.addEventListener('click', function(event) {
    console.log("I have been clicked to make sure my button is at least being recognized");
    ///here is where you would create a variable which held your first question and then you will `append` it somewhere in your html
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
        

    //function to show to quiz questions    
    function showQuiz(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    //Function created for the result of the questions
    function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    
        // show the questions
        showQuiz(questions, quizContainer);
    
        // when user clicks submit, show results
        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    }
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
   })
