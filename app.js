const gameBoard = document.getElementById('game-board');
const scoreBoard = document.getElementById('score-board');

const jeopardyCategories = [
    {
        categoryName: "PALINDROMES",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    },
    {
        categoryName: "ALSO A GREEK LETTER",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum",
                points: "100"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "200"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "300"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "400"
            },
            {
                clue: "lorem",
                answer: "ipsum",
                points: "500"
            }
        ]
    }
]

function addCategory(category) {
    const column = document.createElement('div');
    column.classList.add('category-column');

    const categoryTitle = document.createElement('div');
    categoryTitle.classList.add('category-title');
    categoryTitle.innerText = category.categoryName;

    column.appendChild(categoryTitle);
    gameBoard.append(column);

    category.clues.forEach((question) => {
        const card = document.createElement('div');
        card.classList.add('card');
        column.appendChild(card);

        card.innerText = question.points;
        card.setAttribute('clue', question.clue);

        // card.addEventListener('click', flipCard())
    })

}

jeopardyCategories.forEach(category => addCategory(category));

function flipCard(){
    this.innerHTML = "";
}