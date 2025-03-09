const categories = {
    Science: {
        100: "What is the chemical symbol for water?",
        200: "What planet is known as the Red Planet?",
        300: "What is the speed of light in vacuum (in km/s)?"
    },
    History: {
        100: "Who was the first president of the United States?",
        200: "In which year did the Titanic sink?",
        300: "What ancient civilization built the pyramids?"
    },
    Geography: {
        100: "What is the capital of France?",
        200: "Which river is the longest in the world?",
        300: "What country has the most natural lakes?"
    }
};

let selectedQuestion;
let selectedCategory;

function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear any existing content

    // Create category headers
    const categoryHeaders = Object.keys(categories);
    categoryHeaders.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerText = category;
        categoryDiv.classList.add('category');
        gameBoard.appendChild(categoryDiv);
    });

    // Create point values for each category
    const pointValues = [100, 200, 300];
    pointValues.forEach(points => {
        categoryHeaders.forEach(category => {
            const pointsDiv = document.createElement('div');
            pointsDiv.innerText = points;
            pointsDiv.classList.add('point');
            pointsDiv.onclick = () => selectQuestion(category, points, pointsDiv); // Pass the pointsDiv
            gameBoard.appendChild(pointsDiv);
        });
    });
}

function selectQuestion(category, points, pointsDiv) {
    selectedQuestion = categories[category][points];

    // Disable the clicked question
    pointsDiv.classList.add('used'); // Add a class to indicate it has been used
    pointsDiv.onclick = null; // Remove the onclick event

    document.getElementById('question').innerText = selectedQuestion;
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('questionArea').classList.remove('hidden');
}

document.getElementById('submitAnswer').onclick = function() {
    const answerInput = document.getElementById('answerInput').value.toLowerCase();
    const correctAnswer = selectedQuestion.toLowerCase();

    if (answerInput === correctAnswer) {
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = `Incorrect! The correct answer is: ${selectedQuestion}`;
    }
};

document.getElementById('backButton').onclick = function() {
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('feedback').innerText = '';
    document.getElementById('answerInput').value = '';
};

createGameBoard();
