const para = document.querySelector('div');
para.addEventListener('click', updateName);
console.log('Outside Function');
function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Dancer 1: ' + name;
    console.log('Inside Function');
}

var myDiv = document.getElementById("clickMe");
myDiv.innerHTML = "I like" + "ba" + (+"Javascript") + "a";
let questions = prompt("No.of questions?");
let questionCounter = 0;
let userInputs = [];
let questionArray = [];
for(let i = questions; i > 0; i--)
{
    questionTotal=questions-questionCounter;
    questionArray.push(prompt(`... (${questionTotal} questions left)`));
    
    userInputs.push(prompt(questionArray[questionCounter] + `... (${questionTotal} questions left)`));
    questionCounter+=1;
}
    
console.log(`In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`);