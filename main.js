/* store correct answer 
- When quiz begins, no answers are correct
 */
let correctAnswer = 0;


// store rank of player
let playerRank;

// select <main> HTML element
const main = document.querySelector('main');

/* Ask at least 5 questions 
- store each answer in a variable 
- keep track of number of correct answers
 */
const answer1 = prompt("Question 1: Who has won the most total academy awards?")
if (answer1.toLowerCase() === 'walt disney') {
    correctAnswer += 1;
}
const answer2 = prompt("Question 2: How many ghost chase pac-man at the start of each game?")
if (answer2 === '4') {
    correctAnswer += 1;
}
const answer3 = prompt("Question 3: How many dots appear on a pair of dice?")
if (answer3 === '42') {
    correctAnswer += 1;
}
const answer4 = prompt("Question 4: How many 'Academy Awards for Best Original Song' has Disney won?")
if (answer4 === '14') {
    correctAnswer += 1;
}
const answer5 = prompt("Question 5: What Netflix show had the most streaming views in 2021?")
if (answer5.toLowerCase() === 'squid games') {
    correctAnswer += 1;
}


/* Rank player based on number of correct answers 
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correctAnswer === 5) {
    playerRank = "Gold";
} else if (correctAnswer >= 3) {
    playerRank = "Silver"
} else if (correctAnswer >= 2) {
    playerRank = "Bronze";
} else {
    playerRank = "None :(";
}

// output result to the main element
main.innerHTML = `<h2> You got ${correctAnswer} out of 5 questions correct. </h2>
<p>Crown earned: <strong>${playerRank}</strong></p>`