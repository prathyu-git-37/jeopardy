const categories = {
    Palindromes: {
        100: "Shia LaBeouf played this character in the movie adaptation of Holes by Louis Sachar",
        200: "Also a mode of transportation, this is a website one can use to book travel needs such as flights, hotels, and rental cars",
        300: "This type of technology aids in tracking planes and catching speeders",
        400: "Christopher Nolan directed this time travel movie starring Robert Pattinson and John David Washington",
        500: "Be careful when performing shoulder exercises or you may injure this group of “cuff” muscles"
    },
    "Movies Missing the Same Word": {
        100: "The Imitation ___ & Ender's ___",
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
    "Sent to Space": {
        100: "In 1998 the US module Unity for the ISS was carried aboard Endeavor - this type of craft",
        200: "The James Webb Space Telescope was successfully launched in 2022, designed to photograph phenomena deemed too distant for this predecessor",
        300: "Navstar 1 launched in 1978 was the first satellite with this technology - now commonplace in many smart devices",
        400: "In 2018 SpaceX’s Falcon Heavy rocket successfully launched this car into space",
        500: "In 1977 these twin space probes were launched, each carrying a Golden Record containing sounds and images from Earth"
    },
    Cartoons: {
        100: "The characters of Muffy, Francine, and Buster accompany this title character on a PBS Kids show",
        200: "While originally intended as a kids shows, this show about an Australian dog and her family has garnered a significant adult fan base",
        300: "This series follows the antics of five ten year olds as they operate from a high-tech treehouse to the dismay of the adults and teens in their lives",
        400: "The memes of ‘Old Man Yells at Cloud’ and ‘I’m in danger’ originate from this long-running sitcom",
        500: "Episodes in this satirical cartoon include ‘Make Love Not Warcraft’ and ‘Kenny Dies’"
    },
    "Famous Duos": {
        100: "These two lovebirds were in it through the best of times and especially the worst of times - committing a series of crimes including bank robberies, kidnappings, and murder between 1932 to 1934",
        200: "These are the droids you are looking for - these robotic pals were first introduced in Star Wars: Episode IV – A New Hope",
        300: "While fans have longed for them to be a gay couple, in truth these two characters on Sesame Street are no more than friendly roommates",
        400: "This American folk rock duo had hits such as ‘The Sound of Silence’ and ‘Mrs. Robinson’",
        500: "Don’t let the name fool you - this iconic partnership consists of one magician who never speaks"
    }
};

const doublecategories = {
    "Also a Greek Letter": {
        100: "This luxury watch is sported by Daniel Craig playing James Bond in the movie Casino Royale",
        200: "These types of rays have the shortest wavelength on the electromagnetic spectrum",
        300: "The video game series Half Life uses this letter as its logo",
        400: "This airline has its largest hub at Hartsfield–Jackson Atlanta International Airport (ATL)",
        500: "When abbreviated, it is the unit of measure that we use to denote tire pressure"
    },
    "21st Century Pop Culture": {
        100: "She rose to stardom playing Rachel Zane on Suits, but became internationally famous when she married Prince Harry",
        200: "Prior to accepting the Oscar for Best Actor, Will Smith slapped Chris Rock for a joke targeting this person",
        300: "At SuperBowl XXXVIII, Justin Timberlake accidentally exposed this fellow performer’s nipple",
        400: "Move over Kimye - this OG couple name comes from the stars of 2005’s Mr. and Mrs. Smith",
        500: "This reality show starred the characters of Snooki, Pauly D, and Mike ‘The Situation’ Sorrentino"
    },
    "World Currencies": {
        100: "It serves as the world’s principal reserve currency",
        200: "This meme coin prominently features a Shiba Inu as its logo",
        300: "Former Spanish colonies of the Philippines and Mexico use this as their currency",
        400: "After the Turkish ice cream vendor is done playing with your treat, you will need to pay him in this",
        500: "Prior to the adoption of the Euro, Germany had this as its currency"
    },
    "\"Love\" Songs": {
        100: "Cause you were Romeo, I was a scarlet letter And my daddy said, \"Stay away from Juliet\"",
        200: "I snapped, \"Who's that dude?\", I don't even know his name I laid hands on her, I'll never stoop so low again I guess I don't know my own strength",
        300: "I look and stare so deep in your eyes I touch on you more and more every time When you leave, I'm begging you not to go",
        400: "Baby, you're like lightning in a bottle I can't let you go now that I got it",
        500: "Like a river flows Surely to the sea Darling, so it goes Some things are meant to be"
    },
    "Video Games": {
        100: "By absorbing objects in the environment this short, round, pink creature is able to gain said object’s properties and abilities",
        200: "If you account for all versions Tetris is the highest selling game of all time, however when only considering one official release this other block inspired game takes the cake",
        300: "The latest Installments in this franchise include Biohazard and Village",
        400: "Winning 2021 GoTY, this game is a co-op adventure in which you play as a husband and wife navigating multiple obstacles to salvage their marriage",
        500: "Just one developer by the name of ConcernedApe created this quaint game where you take over the farm of your deceased grandfather"
    },
    "Rhyme Time": {
        100: "A zit located in a cheek depression",
        200: "Donkey Kong successfully breaks out of prison",
        300: "A stretchy recyclable material",
        400: "A homeless double-reeded woodwind instrument",
        500: "A faith based on worshipping urban birds"
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
    "I Crave That Mineral": {
        100: "This dark and shiny igneous rock is referred to as dragonglass in Game of Thrones",
        200: "Earning a score of 1 on the Mohs hardness scale, this mineral is commonly used in chalk and baby powder",
        300: "The Smithsonian National Museum of Natural History houses this precious stone, valued anywhere from $200-$350 million",
        400: "When cracked open, this egg-shaped type of rock reveals a hollow cavity with crystals inside",
        500: "This gem is the birthstone for the month of July and is also a coding language"
    },
    "\"G\"eography": {
        100: "Donald Trump sparked ire in the leaders of Denmark when he attempted to annex this territory",
        200: "This British territory, bordering the south of Spain, historically controlled the narrow entrance to the Mediterranean",
        300: "This most populous city in Scotland means ‘Green Glen’ in Gaelic",
        400: "Located off the coast of Queensland, it is the world’s largest structure comprised of living organisms",
        500: "It is one of Texas’ 2 National Parks, located less than 30 minutes from Carlsbad Caverns"
    },
    "Three Named People": {
        100: "She starred as the lead character of Carrie Bradshaw in Sex and the City",
        200: "He was a Marine veteran who at the age of 24 was responsible for the assassination of John F. Kennedy",
        300: "The inventor of the first telephone, he wanted for the standard greeting upon answering a call to be Ahoy!",
        400: "In 2019, Greta Gerwig directed an ensemble cast including Florence Pugh and Saorise Ronan when her novel ‘Little Women’ was adapted for the big screen",
        500: "Prior to launching his eponymous fashion line, this French designer worked under the mentorship of Christian Dior"
    },
    "Common Bond": {
        100: "Two Pair\n Full House\n Royal Flush",
        200: "Tall\n Grande\n Venti",
        300: "Bowline\n Figure 8\n Monkey’s Fist",
        400: "Sky\n Prussian\n Baby",
        500: "Brooklyn\n Tower\n Sydney Harbor"
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
        alert("Please enter a number between 1 and 6.");
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
        incrementButton.classList.add('score_button');
        incrementButton.innerText = '+';
        incrementButton.onclick = () => updateScore(index, selectedPoints); // Use selected points
        buttonDiv.appendChild(incrementButton);

        // Create decrement button
        const decrementButton = document.createElement('button');
        decrementButton.classList.add('score_button')
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
            pointsDiv.onclick = () => selectQuestion(category, points, pointsDiv);
            gameBoard.appendChild(pointsDiv);
        });
    });
}

function selectQuestion(category, points, pointsDiv) {
    document.getElementById('body').classList.add('background_blue');

    let questions;
    switch (currentRound) {
        case 1: questions = categories; break;
        case 2: questions = doublecategories; break;
        case 3: questions = triplecategories; break;
    }
    selectedQuestion = questions[category][points];
    selectedPoints = points*currentRound; // Store the points of the selected question

    // Disable the clicked question
    pointsDiv.classList.add('used'); // Add a class to indicate it has been used
    pointsDiv.onclick = null; // Remove the onclick event

    if((currentRound === 1 && category === "Sent to Space" && points === 300) ||
        (currentRound === 2 && category === "Also a Greek Letter" && points === 500) ||
        (currentRound === 2 && category === "Rhyme Time" && points === 200) ||
        (currentRound === 3 && category === "I Crave That Mineral" && points === 300) ||
        (currentRound === 3 && category === "Three Named People" && points === 400) ||
        (currentRound === 3 && category === "Common Bond" && points === 500)
    ) {
        document.getElementById('dailyDoubleScreen').classList.remove('hidden');
        const revealQuestionButton = document.createElement('button');
        const dailyDoubleScreenButton = document.getElementById('dailyDoubleScreen');
        dailyDoubleScreenButton.appendChild(revealQuestionButton);
        revealQuestionButton.classList.add('revealButton');
        revealQuestionButton.innerText = 'Reveal Clue';
        revealQuestionButton.onclick = () => {
            dailyDoubleScreenButton.removeChild(revealQuestionButton);
            document.getElementById('dailyDoubleScreen').classList.add('hidden');
            document.getElementById('questionArea').classList.remove('hidden');
            document.getElementById('backButton').classList.remove('hidden');
        }
    }
    else{
        document.getElementById('categoryAndValue').innerText = category + ' for ' + points*currentRound;
        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('backButton').classList.remove('hidden');
    }

    document.getElementById('question').innerText = selectedQuestion.toUpperCase();
    document.getElementById('gameBoard').style.display = 'none';

}

function checkAllQuestionsUsed() {
    const gameBoard = document.getElementById('gameBoard');
    const pointsDivs = gameBoard.getElementsByClassName('point');
    const allUsed = Array.from(pointsDivs).every(div => div.classList.contains('used'));

    if (allUsed) {
        document.getElementById('gameBoard').classList.add('hidden');
        document.getElementById('continueArea').classList.remove('hidden');
        let buttontext = '';
        switch (currentRound) {
            case 1: buttontext = 'Continue to Double Jeopardy'; break;
            case 2: buttontext = 'Continue to Triple Jeopardy'; break;
            case 3: buttontext = 'Continue to Final Jeopardy'; break;
        }
        document.getElementById('continueButton').innerText = buttontext;
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
        document.getElementById('body').classList.add('background_blue');
        document.getElementById('continueArea').classList.add('hidden');
        document.getElementById('gameBoard').style.display = 'none';
        document.getElementById('dailyDoubleScreen').innerText = 'COMMUNICATIONS';
        document.getElementById('dailyDoubleScreen').style.fontSize = '130px';
        document.getElementById('dailyDoubleScreen').classList.remove('hidden');

        const revealQuestionButton = document.createElement('button');
        const dailyDoubleScreenButton = document.getElementById('dailyDoubleScreen');
        dailyDoubleScreenButton.appendChild(revealQuestionButton);
        revealQuestionButton.classList.add('revealButton');
        revealQuestionButton.innerText = 'Reveal Clue';
        revealQuestionButton.onclick = () => {
            document.getElementById('question').innerText = "Originally meant to just be a codename, this technology denoted by a rune-like logo is named after a 10th century Norse king".toUpperCase();
            dailyDoubleScreenButton.removeChild(revealQuestionButton);
            document.getElementById('dailyDoubleScreen').classList.add('hidden');
            document.getElementById('questionArea').classList.remove('hidden');
        }
    }
};

document.getElementById('backButton').onclick = function() {
    document.getElementById('categoryAndValue').innerText = '';
    document.getElementById('body').classList.remove('background_blue');
    selectedPoints = 0;
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('backButton').classList.add('hidden');
    document.getElementById('question').innerText = '';
    checkAllQuestionsUsed(); // Check if all questions have been used
};

createGameBoard();
