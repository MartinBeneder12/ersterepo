const fragen = [
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
];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();

    document.getElementById('next').addEventListener('click', () => {
        currentQuestionIndex++;
        updateButtons();
        displayQuestion();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentQuestionIndex--;
        updateButtons();
        displayQuestion();
    });

    document.getElementById('submit').addEventListener('click', () => {
        checkAnswer();
        updateButtons();
    });
});

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    questionElement.innerText = fragen[currentQuestionIndex].frage;
    answersElement.innerHTML = '';

    fragen[currentQuestionIndex].optionen.forEach(option => {
        const div = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'radio';
        input.name = 'answer';
        input.value = option;
        label.innerText = option;

        div.appendChild(input);
        div.appendChild(label);
        answersElement.appendChild(div);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === fragen[currentQuestionIndex].antwort) {
        score++;
    }

    document.getElementById('points').innerText = `Score: ${score} / ${fragen.length}`;

    if (currentQuestionIndex < fragen.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Quiz finished! Your score: ' + score);
        document.getElementById('next').disabled = true;
        document.getElementById('submit').disabled = true;
    }
}

function updateButtons() {
    document.getElementById('prev').disabled = currentQuestionIndex === 0;
    document.getElementById('next').disabled = currentQuestionIndex >= fragen.length - 1;
}
