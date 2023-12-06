const quizData = [
    {
      question: `Qaysi qatorda css fayli external uslubida tog'ri ulangan`,
      answers: ['<style src="style.css">', '<link rel="stylesheet" href="style.css">', '<stylesheet>style.css</stylesheet>', 'style.css'],
      correct: '<link rel="stylesheet" href="style.css">'
    },
    {
      question: `Qaysi qatorda CSS syntax tog'ri yozilgan`,
      answers: ['{h1}color:yellow', '{h1;color:yellow}', 'h1:color=yellow', 'h1{color: yellow;}'],
      correct: 'h1{color: yellow;}'
    },
    {
    question: ` Raqamlangan ro‘yxatni yaratish uchun qaysi tegdan foydalanish mumkin?`,
    answers: ['ul','li','ol','bilmadim😑'],
    correct:'ol'
    },
    {
    question:'Quyidagi selektorlardan qaysi biri yuqori ustuvorlikka ega?',
    answers:['#text { color: red; }', '.text { color: blue; }', 'div.text { color: yellow; }', 'div#text { color: black; }'],
    correct: '#text { color: red; }'
    },
    {
     question:`Matndagi har bir so'z bosh harf bilan boshlanishi uchun nima yozilad?`,
     answers:['text-style: capitalize;', 'text-transform: capitalize;', 'text-transform: uppercase;', 'transform: capitalize;'],
     correct: 'text-transform: capitalize;'
    },
    {
      question:`hyperlink yani a tegidagi pastki chiziqni olish uchun nima yoziladi?`,
      answers:['a{underline:none;}', 'a{decoration:none}', 'a{text-decoration:none}', 'a{text-decoration:no-underline}'],
      correct: 'a{text-decoration:none}'
       },

  ];
  
  const questionContainer = document.getElementById('question-container');
  const answerButtons = document.getElementById('answer-buttons');
  const result = document.getElementById('result');
  const nextButton = document.getElementById('next-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
  
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('btn');
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = quizData[currentQuestionIndex].correct;
  
    if (selectedButton.innerText === correctAnswer) {
      score++;
      result.innerText = `Tog'ri ✅`;
      selectedButton.style.backgroundColor = 'green';

    } else {
      result.innerText = `Notog'ri ❌`;
      selectedButton.style.backgroundColor = 'red'
    }
  
    nextButton.disabled = false;
    document.querySelectorAll('.btn').forEach(btn => {
      btn.disabled = true;
    });
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion(quizData[currentQuestionIndex]);
      result.innerText = '';
      nextButton.disabled = true;
      document.querySelectorAll('.btn').forEach(btn => {
        btn.disabled = false;
      });
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.innerText = `Your Score: ${score} / ${quizData.length}`;
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
    result.style.display = 'none'
  }
  
  nextButton.addEventListener('click', nextQuestion);
  
  startQuiz();
  