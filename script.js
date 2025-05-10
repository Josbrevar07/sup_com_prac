function checkAnswer(questionId, correctAnswer) {
    let userAnswer = document.getElementById(questionId).value.trim().toLowerCase();
    let resultSpan = document.getElementById("result" + questionId.slice(1));
    let correctSound = document.getElementById("correctSound");
    let wrongSound = document.getElementById("wrongSound");

    if (userAnswer === correctAnswer) {
        resultSpan.textContent = "✅ Correct!";
        resultSpan.className = "correct";
        correctSound.play();
    } else {
        resultSpan.textContent = "❌ Try again.";
        resultSpan.className = "wrong";
        wrongSound.play();
    }
}