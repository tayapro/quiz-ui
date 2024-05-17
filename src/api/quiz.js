const quiz = [
    {
        question: 'Who painted the Mona Lisa?',
        options: [
            'Vincent van Gogh',
            'Leonardo da Vinci',
            'Pablo Picasso',
            'Michelangelo',
        ],
        answer_index: 1,
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['H', 'O2', 'H2O', 'CO2'],
        answer_index: 2,
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer_index: 1,
    },
    {
        question: 'What is the capital city of Brazil?',
        options: ['Buenos Aires', 'Rio de Janeiro', 'Brasília', 'São Paulo'],
        answer_index: 2,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            'William Shakespeare',
            'Jane Austen',
            'Charles Dickens',
            'Mark Twain',
        ],
        answer_index: 0,
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: [
            'Mount Kilimanjaro',
            'Mount Everest',
            'Mount Fuji',
            'Mount McKinley',
        ],
        answer_index: 1,
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Ag', 'Au', 'Pt', 'Fe'],
        answer_index: 1,
    },
    {
        question: 'Who invented the light bulb?',
        options: [
            'Thomas Edison',
            'Nikola Tesla',
            'Alexander Graham Bell',
            'Albert Einstein',
        ],
        answer_index: 0,
    },
    {
        question: 'What is the main ingredient in guacamole?',
        options: ['Tomato', 'Onion', 'Avocado', 'Cilantro'],
        answer_index: 2,
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: [
            'Pacific Ocean',
            'Atlantic Ocean',
            'Indian Ocean',
            'Arctic Ocean',
        ],
        answer_index: 0,
    },
]

let index = 0
let score = 0
let isInProgress = false

async function startQuiz() {
    index = 0
    isInProgress = true
    const quiz_id = 99999999
    return {
        quiz_id,
    }
}

async function getNextQuestion(quiz_id) {
    return {
        question: quiz[index].question,
        options: quiz[index].options,
    }
}

async function submitAnswer(quiz_id, user_answer_index) {
    if (index <= 9 && isInProgress) {
        if (quiz[index].answer_index === user_answer_index) {
            score++
        }
    }

    if (index == 9) {
        isInProgress = false
        return { score }
    }

    index++
    return getNextQuestion(quiz_id)
}

async function finishQuiz(quiz_id) {
    return {
        score,
    }
}

export default {
    startQuiz,
    getNextQuestion,
    submitAnswer,
    finishQuiz,
}
