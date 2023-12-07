const quizData = [
    {
        question: `Qaysi qatorda css fayli external uslubida tog'ri ulangan`,
        answers: [
            '<style src="style.css">',
            '<link rel="stylesheet" href="style.css">',
            "<stylesheet>style.css</stylesheet>",
            "style.css",
        ],
        correct: '<link rel="stylesheet" href="style.css">',
    },
    {
        question: `Qaysi qatorda CSS syntax tog'ri yozilgan`,
        answers: ["{h1}color:yellow", "{h1;color:yellow}", "h1:color=yellow", "h1{color: yellow;}"],
        correct: "h1{color: yellow;}",
    },
    {
        question: ` Raqamlangan ro‘yxatni yaratish uchun qaysi tegdan foydalanish mumkin?`,
        answers: ["ul", "li", "ol", "bilmadim😑"],
        correct: "ol",
    },
    {
        question: "Quyidagi selektorlardan qaysi biri yuqori ustuvorlikka ega?",
        answers: [
            "#text { color: red; }",
            ".text { color: blue; }",
            "div.text { color: yellow; }",
            "div#text { color: black; }",
        ],
        correct: "#text { color: red; }",
    },
    {
        question: `Matndagi har bir so'z bosh harf bilan boshlanishi uchun nima yozilad?`,
        answers: [
            "text-style: capitalize;",
            "text-transform: capitalize;",
            "text-transform: uppercase;",
            "transform: capitalize;",
        ],
        correct: "text-transform: capitalize;",
    },
    {
        question: `hyperlink yani a tegidagi pastki chiziqni olish uchun nima yoziladi?`,
        answers: [
            "a{underline:none;}",
            "a{decoration:none}",
            "a{text-decoration:none}",
            "a{text-decoration:no-underline}",
        ],
        correct: "a{text-decoration:none}",
    },
    {
        question: `3ta elementni displey grid yordamida yonma yon qilish uchun nima yoziladi`,
        answers: [
            `grid-template-columns: repeat(3, 1fr)`,
            `grid-template-columns: repeat(1,3fr)`,
            `grid-template-columns: repeat(3fr)`,
            `grid-template-columns: repeat(1fr,3)`,
        ],
        correct: `grid-template-columns: repeat(3, 1fr)`,
    },
    {
        question: `Barcha <h1> elementlarini orqa fon rangini qanday o'zgartirsa bo'ladi?`,
        answers: [
            `all.h1 {background-color:#FFFFFF}`,
            "h1.all {background-color:#FFFFFF}",
            "h1 {background-color:#FFFFFF}",
            "h1+{background-color:#FFFFFF}",
        ],
        correct: "h1 {background-color:#FFFFFF}",
    },
    {
        question: `Element chegarasi va ichki tarkib o'rtasida bo'shliq yaratish uchun qaysi xususiyatdan foydalaniladi?`,
        answers: ["margin", "padding", "border", "gap"],
        correct: "padding",
    },
    {
        question: `Barcha <p> elementlarni qalin qilib o'zgartiradigan to'g'ri CSS sintaksisini tanlang`,
        answers: [`p style="font-size:bold"`, `p {font-weight: bold}`, `p {text-size:bold}`, `p{weight:bold}`],
        correct: `p {font-weight: bold}`,
    },
    {
        question: `paddin:20px 0px 25px 60px ushbu holatda bottomga nechi px yozilgan?`,
        answers: ["20px", "0px", "60px", "25px"],
        correct: "25px",
    },
    {
        question: `CSSda comment qanaqa korinishda bo'ladi`,
        answers: ["/* comment */", "// comment ", "// comment  //", "<!-- comment -->"],
        correct: "/* comment */",
    },
    {
        question: `Textni rangini o'zgartirish uchun qaysi xususiyatdan foydalaniladi?`,
        answers: ["text-color", "color", "font-color", "color-text"],
        correct: "color",
    },
    {
        question: `Textni shriftni o'zgartirish uchun nima yoziladi? `,
        answers: ["font", "font-name", "font-family", "fontname"],
        correct: "font-family",
    },
    {
        question: `Elementlari kvadrat o'qlari bo'lgan ro'yxatni qanday yaratish mumkin?`,
        answers: ["type: square", "list-style-type: square", "style-list: square", "list-type: square"],
        correct: "list-style-type: square",
    },
    {
        question: `Elementning yuqori qismini qanday o'zgartirish mumkin?`,
        answers: ["padding-top", "top-padding", "top:padding", "paddingtop"],
        correct: "padding-top",
    },
    {
        question: `CSS to'liq yozilishi?`,
        answers: ["Common Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Case Style Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        question: `Nima xatoga yo'l qoyilgan <div>Test 1</div>
        <div id="test">Test 2</div>
        <p class="text-1">Test 3</p>
        <p id="test"></p>
        <p class="text-1">Test 4</p>`,
        answers: [`Text-1 classi bir nechta teglar uchun ishlatilmaydi`, "Blok elementlari uchun id dan foydalana olmaysiz", "Class nomi noto'g'ri yozilgan", `Test idsi bir nechta teglar uchun ishlatilmaydi`],
        correct: `Test idsi bir nechta teglar uchun ishlatilmaydi`,
    },
    {
        question: `Bir teg uchun ishlatilgan classni boshqa teg classiga yozsa bo'ladimi?`,
        answers: ["Xa albatta", "Yo'q mumkin emas"],
        correct: "Xa albatta",
    },
    {
        question: `Text ustiga mishkani ovorganda rangi o'zgarishi uchun nima yoziladi`,
        answers: [":active", ":hover", ":focus", ":visited"],
        correct: ":hover",
    },
    {
        question: `<div id="test">Text</div>`,
        answers: ["#test {}", "* {}", "test {}", "div.test {}"],
        correct: "#test {}",
    },
    {
        question: `Elementni Vertikal centerga olib kelish uchun nima yoziladi`,
        answers: ["justify-content: center;", "justify-content: 50px;", "text:center", "align-items: center;"],
        correct: "align-items: center;",
    },
    {
        question: `Inline style qaysi attribute yoziladi`,
        answers: ["style", "styles", "font", "class"],
        correct: "style",
    },
    {
        question: `Textni sizeni o'zgartirish uchun nima yoziladi`,
        answers: ["font-weight", "size", "font-size", "font-family"],
        correct: "font-size",
    },
    {
        question: `The top border = 10 pixels
                   The bottom border = 5 pixels
                   The left border = 20 pixels
                   The right border = 1pixel?`,
        answers: ["border-width:10px 5px 20px 1px", "border-width:1px 10px 5px 20px", "border-width:10px 1px 5px 20px", "border-width:20px 1px 5px 10px"],
        correct: "border-width:10px 1px 5px 20px",
    },
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const result = document.getElementById("result");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const storedName = localStorage.getItem("userName");
    let userName = storedName || prompt("Ismingizni kiriting:");

    if (!userName) {
        alert("Ismingizni kiriting, iltimos!");
        startQuiz();
        return;
    }

    localStorage.setItem("userName", userName);
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectedButton.innerText === correctAnswer) {
        score++;
        result.innerText = `Tog'ri ✅`;
        selectedButton.style.backgroundColor = "green";
    } else {
        result.innerText = `Notog'ri ❌`;
        selectedButton.style.backgroundColor = "red";
    }

    nextButton.disabled = false;
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        result.innerText = "";
        nextButton.disabled = true;
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.disabled = false;
        });
    } else {
        showResult();
    }
}

function showResult() {
    const storedName = localStorage.getItem("userName");
    questionContainer.innerText = `${storedName}ning natijasi: ${score} / ${quizData.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    result.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);

startQuiz();
