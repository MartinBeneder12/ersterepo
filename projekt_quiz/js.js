// 1. APPLICATION STATE
const state = {
    questions: [
        {
            "frage": "Was ist die Hauptstadt von Deutschland?",
            "optionen": ["Berlin", "München", "Hamburg", "Köln"],
            "antwort": "Berlin"
        },
        {
            "frage": "Wer hat die Relativitätstheorie entwickelt?",
            "optionen": [
                "Isaac Newton",
                "Albert Einstein",
                "Nikola Tesla",
                "Thomas Edison"
            ],
            "antwort": "Albert Einstein"
        },
        {
            "frage": "Was ist der größte Planet in unserem Sonnensystem?",
            "optionen": ["Erde", "Mars", "Jupiter", "Saturn"],
            "antwort": "Jupiter"
        },
        {
            "frage": "Wer hat das Buch '1984' geschrieben?",
            "optionen": [
                "George Orwell",
                "Aldous Huxley",
                "J.K. Rowling",
                "Stephen King"
            ],
            "antwort": "George Orwell"
        },
        {
            "frage": "Was ist die Quadratwurzel von 81?",
            "optionen": ["7", "8", "9", "10"],
            "antwort": "9"
        },
        {
            "frage": "Wer hat das World Wide Web erfunden?",
            "optionen": [
                "Bill Gates",
                "Steve Jobs",
                "Tim Berners-Lee",
                "Mark Zuckerberg"
            ],
            "antwort": "Tim Berners-Lee"
        },
        {
            "frage": "In welchem Jahr fiel die Berliner Mauer?",
            "optionen": ["1987", "1989", "1991", "1993"],
            "antwort": "1989"
        },
        {
            "frage": "Wer hat das iPhone erfunden?",
            "optionen": ["Microsoft", "Apple", "Samsung", "Nokia"],
            "antwort": "Apple"
        },
        {
            "frage": "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
            "optionen": [
                "Vincent Van Gogh",
                "Pablo Picasso",
                "Leonardo da Vinci",
                "Claude Monet"
            ],
            "antwort": "Leonardo da Vinci"
        },
        {
            "frage": "Was ist der höchste Berg der Welt?",
            "optionen": ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
            "antwort": "Mount Everest"
        },
        {
            "frage": "Wer hat das Buch 'Der Herr der Ringe' geschrieben?",
            "optionen": [
                "J.K. Rowling",
                "George R.R. Martin",
                "J.R.R. Tolkien",
                "Stephen King"
            ],
            "antwort": "J.R.R. Tolkien"
        },
        {
            "frage": "Was ist der kleinste Kontinent der Welt?",
            "optionen": ["Afrika", "Australien", "Antarktis", "Europa"],
            "antwort": "Australien"
        },
        {
            "frage": "Wer hat die Glühbirne erfunden?",
            "optionen": [
                "Nikola Tesla",
                "Thomas Edison",
                "Alexander Graham Bell",
                "Benjamin Franklin"
            ],
            "antwort": "Thomas Edison"
        },
        {
            "frage": "In welchem Jahr wurde das Internet öffentlich zugänglich?",
            "optionen": ["1983", "1991", "1995", "2000"],
            "antwort": "1991"
        }
    ],
    currentQuestionIndex: 0,
    score: 0
};

// 2. STATE ACCESSORS/MUTATORS FN'S
function getCurrentQuestion() {
    return state.questions[state.currentQuestionIndex];
}

function incrementScore() {
    state.score++;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
    }
}

// 3. DOM Node Refs
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const pointsElement = document.getElementById('points');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// 4. DOM Node Creation Fn's
function createAnswerOption(option) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    label.innerText = option;

    div.appendChild(input);
    div.appendChild(label);
    return div;
}

// 5. RENDER FN
function renderQuestion() {
    const currentQuestion = getCurrentQuestion();

    questionElement.innerText = currentQuestion.frage;
    answersElement.innerHTML = '';

    currentQuestion.optionen.forEach(option => {
        answersElement.appendChild(createAnswerOption(option));
    });
}

function renderScore() {
    pointsElement.innerText = `Score: ${state.score} / ${state.questions.length}`;
}

// 6. EVENT HANDLERS
function onSubmit() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === getCurrentQuestion().antwort) {
        incrementScore();
        renderScore();

        if (state.currentQuestionIndex < state.questions.length - 1) {
            nextQuestion();
            renderQuestion();
        } else {
            alert('Quiz finished! Your score: ' + state.score);
            nextButton.disabled = true;
            submitButton.disabled = true;
        }

    } else {
        alert('Falsche Antwort!');
    }
}

function updateButtons() {
    prevButton.disabled = state.currentQuestionIndex === 0;
    nextButton.disabled = state.currentQuestionIndex >= state.questions.length - 1;
}

// 7. INIT BINDINGS
document.addEventListener("DOMContentLoaded", () => {
    renderQuestion();
    renderScore();

    submitButton.addEventListener('click', () => {
        onSubmit();
        updateButtons();
    });
});

// 8. INITIAL RENDER
renderQuestion();
renderScore();
updateButtons();
