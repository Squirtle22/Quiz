// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ['Street artist Banksy is originally associated with which British city?', 'bristol'],
    ['Which Disney Princess called Gus and Jaq friends?', 'cinderella'],
    ['The Simpsons was the spin-off show of which American sketch series?', 'the tracey ullman show'],
    ['Which Catastrophe star makes a cameo in Deadpool 2 as Peter?', 'rob delaney'],
    ['Which soft drink is commonly associated with Scotland?', 'irn-bru']
]

// 2. Store the number of questions answered correctly
const correct = []; const incorrect = []; let correctAnswers = 0; let html;

/*
3. Use a loop to cycle through each question
    - Present each question to the user
    - Compare the user's response to answer in the array
    - If the response matches the answer, the number of correctly
    answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    let newresponse = response.toLocaleLowerCase()

    if (newresponse === answer) {
        correctAnswers++;
        correct.push(question);

    } else {
        incorrect.push(`<li>${question}</li>`)
        // incorrect.push(question);
    }


}

// 4. Display the number of correct answers to the user
const main = document.querySelector('main')

if (correctAnswers === 5) {
    html = `<h1>You Have Got ${correctAnswers} correct!</h1>`
} else {
    html = `<h1>You Have Got ${correctAnswers} correct!</h1>
                <p>You Got These Questions wrong:</p>
                <ul>${incorrect.join('')}</ul>`
}


main.innerHTML = html

