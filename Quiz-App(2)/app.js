const quizData= [
    {
        question: 'Check the abilities that the hero Junkrat can use.',
        a: 'Frag Launcher',
        b: 'Grapping Hook',
        c: 'Venom Mine',
        d: 'Rip-Tire',
        e: 'Defense Matrix',
        correct: 'a',
    },
    {
        question: 'Check the abilities that the hero Tracer can use.',
        a: 'Pulse Bomb',
        b: 'Blink',
        c: 'Pulse Pistols',
        d: 'Sentry Turret',
        e: 'Rocket Punch',
        correct: 'a',
    },
    {
        question: 'Check the abilities that the hero Genji can use.',
        a: 'Sonic Arrow',
        b: 'Storm Bow',
        c: 'Deflect',
        d: 'Dragonblade',
        e: 'Jagged Blade',
        correct: 'c',
    },
    {
        question: 'Check the abilities that the hero Winston can use.',
        a: 'Tesla Cannon',
        b: 'Jump Pack',
        c: 'Primal Rage',
        d: 'Orb of Destruction',
        e: 'Ravenous Vortex',
        correct: 'b',
    },
    {
        question: 'Check the abilities that the hero Hanzo can use.',
        a: 'Crossfade',
        b: 'Self-Repair',
        c: 'Dragonstrike',
        d: 'Transcendence',
        e: 'Dynamite',
        correct: 'c',
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
    `
    }
  }
})






