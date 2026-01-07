const selectedProfile = localStorage.getItem("selectedProfile");
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timeLeft = 30 * 60; // 30 minutes
let timerInterval;

setTimeout(startQuiz, 1500);



function startQuiz() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    quizQuestions = questions
        .filter(q => q.profile === selectedProfile)
        .sort(() => Math.random() - 0.5)
        // .slice(0, 50);
        .slice(0, Math.min(4, questions.filter(q => q.profile === selectedProfile).length));


    startTimer();
    showQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            submitQuiz();
        }
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;
        document.getElementById("timer").textContent =
            `Time Left: ${min}:${sec < 10 ? "0" : ""}${sec}`;
        timeLeft--;
    }, 1000);
}

function showQuestion() {
    const q = quizQuestions[currentIndex];
    document.getElementById("question").textContent =
        `${currentIndex + 1}. ${q.question}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerHTML = `
      <label>
        <input type="radio" name="option" value="${index}">
        ${opt}
      </label>`;
        optionsDiv.appendChild(div);
    });
}

// function nextQuestion() {
//     const selected = document.querySelector("input[name='option']:checked");
//     if (selected && parseInt(selected.value) === quizQuestions[currentIndex].answer) {
//         score++;
//     }

//     currentIndex++;
//     if (currentIndex < quizQuestions.length) {
//         showQuestion();
//     } else {
//         submitQuiz();
//     }
// }

function nextQuestion() {
    const selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an option before continuing");
        return;
    }

    if (parseInt(selected.value) === quizQuestions[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < quizQuestions.length) {
        showQuestion();
    } else {
        submitQuiz();
    }
}


function submitQuiz() {
    clearInterval(timerInterval);

    const email = localStorage.getItem("loggedInUser");
    const profile = selectedProfile;
    const status = score >= 2 ? "Qualified" : "Not Qualified";

    const attempts = JSON.parse(localStorage.getItem("attempts")) || [];

    attempts.push({
        email,
        profile,
        score,
        status
    });

    localStorage.setItem("attempts", JSON.stringify(attempts));
    localStorage.setItem("score", score);

    window.location.href = "Result.html";
}



