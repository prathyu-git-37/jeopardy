const categories = {
    Science: {
        100: "What is the chemical symbol for water?",
        200: "What planet is known as the Red Planet?",
        300: "What is the speed of light in vacuum (in km/s)?",
        400: "What gas do plants absorb from the atmosphere?",
        500: "What is the powerhouse of the cell?"
    },
    History: {
        100: "Who was the first president of the United States?",
        200: "In which year did the Titanic sink?",
        300: "What ancient civilization built the pyramids?",
        400: "Who was known as the Iron Lady?",
        500: "What year did World War II end?"
    },
    Geography: {
        100: "What is the capital of France?",
        200: "Which river is the longest in the world?",
        300: "What country has the most natural lakes?",
        400: "Which desert is the largest in the world?",
        500: "What mountain range separates Europe from Asia?"
    },
    Literature: {
        100: "Who wrote 'Romeo and Juliet'?",
        200: "What is the title of the first Harry Potter book?",
        300: "Which novel begins with 'Call me Ishmael'?",
        400: "Who wrote 'Pride and Prejudice'?",
        500: "What is the name of the fictional detective created by Arthur Conan Doyle?"
    },
    Mathematics: {
        100: "What is the value of Pi to two decimal places?",
        200: "What is the term for a polygon with eight sides?",
        300: "What is the square root of 64?",
        400: "What is 5 factorial (5!)?",
        500: "What is the area of a triangle with a base of 10 and height of 5?"
    },
    Music: {
        100: "What is the capital of classical music?",
        200: "Who composed the 'Four Seasons'?",
        300: "What instrument has 88 keys?",
        400: "Who is known as the Queen of Pop?",
        500: "What is the term for a group of singers?"
    }
};

let selectedQuestion;
let teamScores = [];
let teamNames = [];

document.getElementById('startButton').onclick = function() {
    const teamCount = parseInt(document.getElementById('teamCount').value);
    if (teamCount >= 2 && teamCount <= 6) {
        document.getElementById('teamInputArea').classList.add('hidden');
        document.getElementById('teamNamesArea').classList.remove('hidden');
        createTeamInputs(teamCount);
    } else {
        alert("Please enter a number between 2 and 6.");
    }
};

function createTeamInputs(count) {
    const teamInputsDiv = document.getElementById('teamInputs');
    teamInputsDiv.innerHTML = ''; // Clear existing inputs
    for (let i = 1; i <= count; i++) {
        const input = document.createElement('input');
        input.placeholder = `Team ${i} Name`;
        input.id = `team${i}`;
        teamInputsDiv.appendChild(input);
    }
}

document.getElementById('submitTeamsButton').onclick = function() {
    const teamCount = document.getElementById('teamCount').value;
    teamScores = Array(parseInt(teamCount)).fill(0);
    teamNames = [];

    for (let i = 1; i <= teamCount; i++) {
        const teamName = document.getElementById(`team${i}`).value;
        teamNames.push(teamName || `Team ${i}`);
    }

    displayScores();
    document.getElementById('teamNamesArea').classList.add('hidden');
    document.getElementById('scoreDisplay').classList.remove('hidden');
    document.getElementById('gameBoard').classList.remove('hidden');
    createGameBoard();
};

function displayScores() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerHTML = '<h2>Scores</h2>';
    teamNames.forEach((name, index) => {
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('score');

        // Create a div for team name
        const teamName = document.createElement('div');
        teamName.innerText = name; // Team name
        scoreDiv.appendChild(teamName);

        // Create score display
        const scoreValue = document.createElement('span');
        scoreValue.id = `score${index}`;
        scoreValue.innerText = teamScores[index]; // Score value
        scoreValue.style.cursor = 'pointer'; // Indicate that it's clickable
        scoreValue.onclick = () => makeScoreEditable(scoreValue, index); // Make it editable on click
        scoreDiv.appendChild(scoreValue);

        // Create a div for buttons
        const buttonDiv = document.createElement('div');

        // Create increment button
        const incrementButton = document.createElement('button');
        incrementButton.innerText = '+';
        incrementButton.onclick = () => updateScore(index, selectedPoints); // Use selected points
        buttonDiv.appendChild(incrementButton);

        // Create decrement button
        const decrementButton = document.createElement('button');
        decrementButton.innerText = '-';
        decrementButton.onclick = () => updateScore(index, -selectedPoints); // Use negative selected points
        buttonDiv.appendChild(decrementButton);

        // Append the button div to the score div
        scoreDiv.appendChild(buttonDiv);

        scoreDisplay.appendChild(scoreDiv);
    });
}


function makeScoreEditable(scoreElement, index) {
    const currentScore = scoreElement.innerText;
    scoreElement.innerHTML = `<input type="number" value="${currentScore}" id="inputScore${index}" style="width: 50px;" />`;

    const inputField = document.getElementById(`inputScore${index}`);
    inputField.focus(); // Focus on the input field

    inputField.onblur = () => {
        const newScore = parseInt(inputField.value);
        if (!isNaN(newScore)) {
            teamScores[index] = newScore; // Update team score
            scoreElement.innerText = newScore; // Update displayed score
        } else {
            scoreElement.innerText = currentScore; // Revert to original if invalid
        }
    };

    inputField.onkeypress = (event) => {
        if (event.key === 'Enter') {
            inputField.blur(); // Blur (lose focus) on Enter key to save the score
        }
    };
}

function updateScore(teamIndex, points) {
    teamScores[teamIndex] += points;
    document.getElementById(`score${teamIndex}`).innerText = teamScores[teamIndex];
}

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
    const pointValues = [100, 200, 300, 400, 500];
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
    selectedPoints = points; // Store the points of the selected question

    // Disable the clicked question
    pointsDiv.classList.add('used'); // Add a class to indicate it has been used
    pointsDiv.onclick = null; // Remove the onclick event

    document.getElementById('categoryAndValue').innerText = category + ' for ' + points;
    document.getElementById('question').innerText = selectedQuestion;
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('questionArea').classList.remove('hidden');
}

    document.getElementById('backButton').onclick = function() {
    selectedPoints = 0;
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('question').innerText = ''; // Clear the question text
};

createGameBoard();
