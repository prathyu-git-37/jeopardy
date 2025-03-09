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
    Math: {
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

    // Disable the clicked question
    pointsDiv.classList.add('used'); // Add a class to indicate it has been used
    pointsDiv.onclick = null; // Remove the onclick event

    document.getElementById('question').innerText = selectedQuestion;
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('questionArea').classList.remove('hidden');
}

document.getElementById('backButton').onclick = function() {
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('question').innerText = ''; // Clear the question text
};

createGameBoard();
