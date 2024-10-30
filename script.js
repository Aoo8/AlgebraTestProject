

const form = document.querySelector("#test");

let answers = ["Yes", "No", "(15,-27)", "Infinitely Many", "(11,3)", 
              "(1,8,2)", "(24,15)", "No Solutions", "(8,-10)", "No Solutions"];


const solutionRadioButtons = document.querySelectorAll(".solution > input[type=radio]");
const solutionTextBoxes = document.querySelectorAll("input[type=text]");

const submitButton = document.querySelector("input[type=submit]")



function checkTextBoxes() { 
    for (let i = 0; i < solutionRadioButtons.length; i++) {
        if (solutionRadioButtons[i].checked === true) {
            solutionTextBoxes[i].setAttribute("required", "");
        } else if (solutionRadioButtons[i].checked === false) {
            solutionTextBoxes[i].value = ""
            solutionTextBoxes[i].removeAttribute("required")
        }
    }
}

const answerBoxes = document.querySelectorAll(".answer-box");
let answersCorrect = 0;

function checkAnswers() {
    for (let i = 0; i < answerBoxes.length; i++) {
        const inputs = answerBoxes[i].querySelectorAll('.answer > input')
        for (let j = 0; j < inputs.length; j++) {
            console.log(`input: type=${inputs[j].value}, value=${inputs[j].value}, checked=${inputs[j].checked}`)
           if ((inputs[j].type === "text") && (inputs[j].value === answers[i])) {
                console.log(i + ". correct: " + inputs[j].value)
                answersCorrect++;
                break;
           } else if ((inputs[j].checked === true) && (inputs[j].value === answers[i])) {
                console.log(i + ". correct:" + inputs[j].value)
                answersCorrect++;
                break;
           } 
        }
    }
}

function calculateAnswers() {
    let finalScore = answersCorrect * 10;
    let revealScore = document.querySelector("#finalScore");
    revealScore.textContent = finalScore + "%";
    let answerLink = document.querySelector("a");
    answerLink.removeAttribute("hidden")
}


submitButton.addEventListener('click', checkTextBoxes);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    checkAnswers()
    calculateAnswers();
    window.scrollTo(0, 0)   
})
