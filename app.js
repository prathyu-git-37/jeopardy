const categories = {
    Palindromes: {
        100: "Shia LaBeouf played this character in the movie adaptation of Holes by Louis Sachar",
        200: "Also a mode of transportation, this is a website one can use to book travel needs such as flights, hotels, and rental cars",
        300: "This type of technology aids in tracking planes and catching speeders",
        400: "Christopher Nolan directed this time travel movie starring Robert Pattinson and John David Washington",
        500: "Be careful when performing shoulder exercises or you may injure this group of “cuff” muscles"
    },
    "Movies Missing the Same Word": {
        100: "The ___ Jedi & The ___ of the Mohicans",
        200: "The ___ Knight & Zero ___ Thirty",
        300: "A ___ Place & All ___ on the Western Front",
        400: "Man on ___ & Catching ___",
        500: "___ Women & Chicken ___"
    },
    "History BINGO": {
        100: "‘B’ 1453: The fall of Constantinople marked the end of this empire",
        200: "‘I’ 1947: This British colony gained independence",
        300: "‘N’ 1972: This candidate was behind the infamous Watergate Scandal, leading to his resignation",
        400: "‘G’ 1440: This man invented the movable type printing press",
        500: "‘O’ 1811-1840: Make sure you pass by Independence Rock when you embark on this passage to the West"
    },
    Literature: {
        100: "Who wrote 'Romeo and Juliet'",
        200: "What is the title of the first Harry Potter book",
        300: "Which novel begins with 'Call me Ishmael'",
        400: "Who wrote 'Pride and Prejudice'",
        500: "What is the name of the fictional detective created by Arthur Conan Doyle"
    },
    Mathematics: {
        100: "What is the value of Pi to two decimal places",
        200: "What is the term for a polygon with eight sides",
        300: "What is the square root of 64",
        400: "What is 5 factorial (5!)",
        500: "What is the area of a triangle with a base of 10 and height of 5"
    },
    Music: {
        100: "What is the capital of classical music",
        200: "Who composed the 'Four Seasons'",
        300: "What instrument has 88 keys",
        400: "Who is known as the Queen of Pop",
        500: "What is the term for a group of singers"
    }
};

const doublecategories = {
    'Also a Greek Letter': {
        100: "This luxury watch is sported by Daniel Craig playing James Bond in the movie Casino Royale",
        200: "These types of rays have the shortest wavelength on the electromagnetic spectrum",
        300: "The video game series Half Life uses this letter as its logo",
        400: "This airline has its largest hub at Hartsfield–Jackson Atlanta International Airport (ATL)",
        500: "When abbreviated, it is the unit of measure that we use to denote tire pressure"
    },
    Nothing: {
        100: "Who was the first president of the United States",
        200: "In which year did the Titanic sink",
        300: "What ancient civilization built the pyramids",
        400: "Who was known as the Iron Lady",
        500: "What year did World War II end"
    },
    Something: {
        100: "What is the capital of France",
        200: "Which river is the longest in the world",
        300: "What country has the most natural lakes",
        400: "Which desert is the largest in the world",
        500: "What mountain range separates Europe from Asia"
    },
    Everything: {
        100: "Who wrote 'Romeo and Juliet'",
        200: "What is the title of the first Harry Potter book",
        300: "Which novel begins with 'Call me Ishmael'",
        400: "Who wrote 'Pride and Prejudice'",
        500: "What is the name of the fictional detective created by Arthur Conan Doyle"
    },
    Everywhere: {
        100: "What is the value of Pi to two decimal places",
        200: "What is the term for a polygon with eight sides",
        300: "What is the square root of 64",
        400: "What is 5 factorial (5!)",
        500: "What is the area of a triangle with a base of 10 and height of 5"
    },
    Once: {
        100: "What is the capital of classical music",
        200: "Who composed the 'Four Seasons'",
        300: "What instrument has 88 keys",
        400: "Who is known as the Queen of Pop",
        500: "What is the term for a group of singers"
    }
};

const triplecategories = {
    "Great Wordle Starters": {
        100: "If you are saying goodbye to your friend in Paris, you can bid them this",
        200: "A prolonged duration without blinking",
        300: "Japan is known for having a large amount of this rapid transportation - one might even say bullet speed",
        400: "This can refer to both a long necked bird and a large construction vehicle",
        500: "MP3 and Wav formats are ways to store this type of file"
    },
    "Sports Ball": {
        100: "Analysts say that the trade of this Slovenian athlete was one of the most shocking moves in franchise history",
        200: "This 17-year-old soccer phenom has been compared to Lionel Messi for his contributions to F.C. Barcelona",
        300: "Between this tennis power couple, they have spent a combined 478 ranked No. 1 in their respective organizations",
        400: "This special piece of attire is given to the winner of The Masters tournament",
        500: "Also known as a Quarterback Sneak, this rhyming play has been used to great effect by the Philadelphia Eagles"
    },
    Literature: {
        100: "Who wrote 'Romeo and Juliet'",
        200: "What is the title of the first Harry Potter book",
        300: "Which novel begins with 'Call me Ishmael'",
        400: "Who wrote 'Pride and Prejudice'",
        500: "What is the name of the fictional detective created by Arthur Conan Doyle"
    },
    Mathematics: {
        100: "What is the value of Pi to two decimal places",
        200: "What is the term for a polygon with eight sides",
        300: "What is the square root of 64",
        400: "What is 5 factorial (5!)",
        500: "What is the area of a triangle with a base of 10 and height of 5"
    },
    Music: {
        100: "What is the capital of classical music",
        200: "Who composed the 'Four Seasons'",
        300: "What instrument has 88 keys",
        400: "Who is known as the Queen of Pop",
        500: "What is the term for a group of singers"
    },
    "I Crave That Mineral": {
        100: "This dark and shiny igneous rock is referred to as dragonglass in Game of Thrones",
        200: "Earning a score of 1 on the Mohs hardness scale, this mineral is commonly used in chalk and baby powder",
        300: "The Smithsonian National Museum of Natural History houses this precious stone, valued anywhere from $200-$350 million",
        400: "When cracked open, this egg-shaped rock reveals a hollow cavity with crystals inside",
        500: "This gem is the birthstone for the month of July and is also a coding language"
    }
};

let selectedQuestion;
let teamScores = [];
let teamNames = [];
let currentRound = 1;

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
    scoreDisplay.innerHTML = ''; // Clear previous content
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
    gameBoard.innerHTML = '';
    let categoryHeaders = '';
    switch (currentRound) {
        case 1: categoryHeaders = Object.keys(categories);
        break;
        case 2: categoryHeaders = Object.keys(doublecategories);
        break;
        case 3: categoryHeaders = Object.keys(triplecategories);
        break;
    }
    categoryHeaders.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerText = category.toUpperCase();
        categoryDiv.classList.add('category');
        gameBoard.appendChild(categoryDiv);
    });

    // Create point values for each category
    const pointValues = [100, 200, 300, 400, 500];
    pointValues.forEach(points => {
        categoryHeaders.forEach(category => {
            const pointsDiv = document.createElement('div');
            pointsDiv.innerText = points * currentRound;
            pointsDiv.classList.add('point');
            pointsDiv.onclick = () => selectQuestion(category, points*currentRound, pointsDiv);
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
    document.getElementById('backButton').classList.remove('hidden');
}

function checkAllQuestionsUsed() {
    const gameBoard = document.getElementById('gameBoard');
    const pointsDivs = gameBoard.getElementsByClassName('point');
    const allUsed = Array.from(pointsDivs).every(div => div.classList.contains('used'));

    if (allUsed) {
        document.getElementById('gameBoard').classList.add('hidden');
        document.getElementById('continueArea').classList.remove('hidden');
    }
}

document.getElementById('continueButton').onclick = function() {
    currentRound++;
    if (currentRound !== 4) {
        document.getElementById('continueArea').classList.add('hidden');
        document.getElementById('gameBoard').classList.remove('hidden');
        createGameBoard(); // Create the next round's game board
    }
    else{
        //Display final jeopardy category
    }
};

document.getElementById('backButton').onclick = function() {
    selectedPoints = 0;
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('backButton').classList.add('hidden');
    document.getElementById('question').innerText = '';
    checkAllQuestionsUsed(); // Check if all questions have been used
};

createGameBoard();
