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
let userInputs = ["Chennai","Aishwarya","Ticket","Issue"];
console.log(`In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`);

let a = "1";
console.log(typeof a);
console.log(a+1);
console.log(typeof a);
console.log(++a);
console.log(typeof a);