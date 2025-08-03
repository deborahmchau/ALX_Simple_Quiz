function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackDiv = document.getElementById("feedback");

    if (!selectedOption) {
        feedbackDiv.textContent = "Please select an answer before submitting.";
        feedbackDiv.style.color = "#dc3545"; // red
        return;
    }
 const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done.";
        feedbackDiv.style.color = "#28a745"; // green
    } else {
        feedbackDiv.textContent = "That's incorrect. Try again!";
        feedbackDiv.style.color = "#dc3545"; // red
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
