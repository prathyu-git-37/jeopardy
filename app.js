const gameBoard = document.getElementById('game-board');
const scoreBoard = document.getElementById('score-board');

const jeopardyCategories = [
    {
        categoryName: "PALINDROMES",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            }
        ]
    },
    {
        categoryName: "TBD",
        clues: [
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
            },
            {
                clue: "lorem",
                answer: "ipsum"
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

}

jeopardyCategories.forEach(category => addCategory(category));