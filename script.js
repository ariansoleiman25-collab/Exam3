/* DATA (English Content preserved) */
const QUESTIONS = [
  { q: "1. Functional Programming mainly follows which architecture?", opts: ["Abstract model","Object-oriented model","Von-Neumann architecture","Declarative model"], ans: 2 },
  { q: "2. Logic Programming mainly deals with:", opts: ["Sequential steps","Objects and their relationships","Hardware architecture","Memory management"], ans: 1 },
  { q: "3. Functional Programming syntax is based on:", opts: ["Horn clauses","Logic formulae","Sequence of statements","Facts and rules"], ans: 2 },
  { q: "4. Logic Programming syntax is mainly:", opts: ["Machine instructions","Procedural steps","Logic formulae (Horn clauses)","Assembly code"], ans: 2 },
  { q: "5. In Functional Programming, computation occurs by:", opts: ["Deduction","Pattern matching","Executing statements sequentially","Inference"], ans: 2 },
  { q: "6. In Logic Programming, computation is done by:", opts: ["Executing loops","Deducting clauses","Sequential execution","Compiling objects"], ans: 1 },
  { q: "7. In Functional Programming, logic and control are:", opts: ["Separated","Independent","Mixed together","Abstracted"], ans: 2 },
  { q: "8. In Logic Programming, logic and control can be:", opts: ["Mixed","Compiled","Ignored","Separated"], ans: 3 },
  { q: "9. Prolog stands for:", opts: ["Programming Logic","Program Logical","PROgramming in LOGics","Procedural Logic"], ans: 2 },
  { q: "10. Prolog belongs to which generation of programming languages?", opts: ["First","Second","Third","Fourth"], ans: 3 },
  { q: "11. Prolog mainly supports which programming paradigm?", opts: ["Procedural","Object-oriented","Declarative","Imperative"], ans: 2 },
  { q: "12. Prolog is especially suitable for:", opts: ["Numeric computation","File handling","Symbolic and non-numeric computation","Graphics programming"], ans: 2 },
  { q: "13. In Prolog, the programmer specifies:", opts: ["How to solve the problem","Hardware details","What the problem is","Control flow"], ans: 2 },
  { q: "14. Which of the following is NOT a basic element of Prolog?", opts: ["Facts","Rules","Queries","Classes"], ans: 3 },
  { q: "15. Facts in Prolog are:", opts: ["Conditionally true","Unconditionally true","Always false","Recursive"], ans: 1 },
  { q: "16. Which of the following is an example of a fact?", opts: ["Tom is happy if he eats","father(X,Y)","Tom is a cat","brother(X,Y)"], ans: 2 },
  { q: "17. A Prolog rule represents:", opts: ["Explicit relationship","Conditional relationship","Numeric computation","Loop structure"], ans: 1 },
  { q: "18. The symbol :- in Prolog means:", opts: ["AND","OR","If / is implied by","Equal to"], ans: 2 },
  { q: "19. The left-hand side of :- is called:", opts: ["Body","Clause","Predicate","Head"], ans: 3 },
  { q: "20. The right-hand side of :- is called:", opts: ["Head","Fact","Body","Variable"], ans: 2 },
  { q: "21. Queries in Prolog are used to:", opts: ["Define rules","Store facts","Ask questions","Compile programs"], ans: 2 },
  { q: "22. A Knowledge Base consists of:", opts: ["Facts only","Rules only","Queries only","Facts and rules"], ans: 3 },
  { q: "23. In Prolog, names starting with uppercase letters represent:", opts: ["Atoms","Numbers","Variables","Predicates"], ans: 2 },
  { q: "24. Facts and rules together form:", opts: ["Program flow","Knowledge Base","Query engine","Compiler"], ans: 1 },
  { q: "25. Relations in Prolog represent:", opts: ["Loops","Arithmetic operations","Relationships between objects","File systems"], ans: 2 },
  { q: "26. Which predicate defines a parent relationship?", opts: ["child(X,Y)","parent(X,Y)","father(X,Y,Z)","relation(X,Y)"], ans: 1 },
  { q: "27. A brother relationship requires:", opts: ["Same gender only","Same parent and male","Same age","Same name"], ans: 1 },
  { q: "28. To avoid a person being his own brother, we use:", opts: ["=:=","==","\\==","!="], ans: 2 },
  { q: "29. Which relationship is recursive in nature?", opts: ["Brother","Sister","Parent","Predecessor"], ans: 3 },
  { q: "30. A Prolog program consists of clauses ending with:", opts: ["Semicolon","Colon","Comma","Full stop"], ans: 3 },
  { q: "31. Which of the following is a variable in Prolog?", opts: ["bob","liz","X","pat"], ans: 2 },
  { q: "32. Logic programming is based on:", opts: ["Procedures","Sequential algorithms","Facts and rules","File system"], ans: 2 },
  { q: "33. What is the correct way to define that Pam is female in Prolog?", opts: ["female = pam.","pam(female).","female(pam).","sex(pam)."], ans: 2 },
  { q: "34. Which language is an example of logic programming?", opts: ["Python","Prolog","C++","Java"], ans: 1 },
  { q: "35. What is a \"fact\" in Prolog?", opts: ["A rule that is sometimes true","A variable that stores values","A predicate that is always true","A type of query"], ans: 2 },
  { q: "36. Queries in Prolog are used to:", opts: ["Delete facts","Add rules","Ask questions","Write algorithms"], ans: 2 },
  { q: "37. In Prolog, facts and rules must always end with:", opts: ["A semicolon (;)","A comma (,)","A colon (:)","A full stop (.)"], ans: 3 },
  { q: "38. What is the \"if\" symbol in Prolog syntax?", opts: ["-->",":=","::",":-"], ans: 3 },
  { q: "39. In the rule grandfather(X, Y) :- father(X, Z), parent(Z, Y)., what is required for X to be Y's grandfather?", opts: ["Z must be Y's grandfather","X must be father of Y directly","X must be father of Z, and Z must be parent of Y","Y must be father of Z"], ans: 2 },
  { q: "40. How is an uncle relationship defined correctly in Prolog?", opts: ["uncle(X,Z) :- brother(X,Y), parent(Y,Z).","uncle(X,Z) :- parent(X,Y), parent(Y,Z).","uncle(X,Z) :- parent(Z,X), brother(Z,Y).","uncle(X,Z) :- male(X), parent(Y,Z)."], ans: 0 },
  { q: "41. Which of the following is an atom?", opts: ["X","123","tom","day(9,jun,2017)"], ans: 2 },
  { q: "42. Which of the following is a structure?", opts: ["tom","100","X","point(10,25)"], ans: 3 },
  { q: "43. Variables in Prolog must start with:", opts: ["Lowercase letter","Digit","Uppercase letter or underscore","Special symbol"], ans: 2 },
  { q: "44. Which of the following is a valid variable?", opts: ["tom","student_list","Student_list","123X"], ans: 2 },
  { q: "45. Anonymous variables are written as:", opts: ["X","__","?","_"], ans: 3 },
  { q: "46. Anonymous variables are mainly used when:", opts: ["Variable value is important","Value should not be revealed","Loop is required","Recursion is used"], ans: 1 },
  { q: "47. Each anonymous variable is treated as:", opts: ["Same","Global","Different","Constant"], ans: 2 },
  { q: "48. Prolog inference is based on:", opts: ["Dijkstra algorithm","Robinson's Resolution Principle","Bubble sort","Backpropagation"], ans: 1 },
  { q: "49. The first Prolog was developed in:", opts: ["1965","1968","1970","1981"], ans: 2 },
  { q: "50. Which of the following is NOT an application of Prolog?", opts: ["Natural Language Understanding","Robot Planning","Web page design","Intelligent Database Retrieval"], ans: 2 }
];

/* STATE */
let idx = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);
let score = 0;

/* UI REFERENCES */
const viewStart = document.getElementById('view-start');
const viewQuiz = document.getElementById('view-quiz');
const viewResult = document.getElementById('view-result');
const miniScore = document.getElementById('miniScore');

const qText = document.getElementById('qText');
const qCount = document.getElementById('qCount');
const choicesList = document.getElementById('choicesList');
const progressFill = document.getElementById('progressFill');
const btnNext = document.getElementById('btnNext');

/* LOGIC */
function startQuiz() {
  viewStart.style.display = 'none';
  viewQuiz.style.display = 'flex'; // Card uses flex
  renderQuestion();
  miniScore.style.display = 'block';
}

function renderQuestion() {
  const q = QUESTIONS[idx];
  
  // Update Meta
  qCount.innerHTML = `Question <span class='en'>${idx + 1}/${QUESTIONS.length}</span>`;
  const pct = ((idx+1) / QUESTIONS.length) * 100;
  progressFill.style.width = pct + '%';
  
  // Animation: Reflow trigger
  qText.classList.remove('anim-enter');
  void qText.offsetWidth; // trigger reflow
  qText.classList.add('anim-enter');
  
  qText.textContent = q.q;
  
  // Choices
  choicesList.innerHTML = '';
  const letters = ['A','B','C','D'];
  
  q.opts.forEach((optText, i) => {
    const div = document.createElement('div');
    // Important: We don't remove existing choice class, we assume it has popIn anim
    div.className = 'choice'; 
    
    if(userAnswers[idx] === i) {
      if(userAnswers[idx] === q.ans) div.classList.add('correct');
      else div.style.borderColor = 'var(--bad)'; // Keep it simpler on load
    }

    div.onclick = () => selectAnswer(i, div);
    
    div.innerHTML = `
      <div class="choice-tag">${letters[i]}</div>
      <div style="flex:1">${optText}</div>
      ${userAnswers[idx] !== null && i === q.ans ? '✅' : ''}
    `;
    
    choicesList.appendChild(div);
  });
  
  // Button State
  btnNext.disabled = userAnswers[idx] === null;
  btnNext.textContent = (idx === QUESTIONS.length - 1) ? 'تەواوکردن' : 'دواتر';
}

function selectAnswer(i, el) {
  if(userAnswers[idx] !== null) return; // Locked
  
  // Haptics
  if(navigator.vibrate) navigator.vibrate(10);
  
  userAnswers[idx] = i;
  const correct = QUESTIONS[idx].ans;
  
  // update UI
  const allChoices = choicesList.children;
  for(let c of allChoices) c.classList.remove('correct', 'wrong');
  
  if(i === correct) {
    el.classList.add('correct');
    score++;
    miniScore.textContent = score;
    miniScore.classList.add('pop'); // Add pop effect if we had css for it
  } else {
    el.classList.add('wrong');
    allChoices[correct].classList.add('correct'); // Show real answer
    allChoices[correct].innerHTML += ' ✅';
    if(navigator.vibrate) navigator.vibrate([30,50,30]);
  }
  
  btnNext.disabled = false;
}

function nextQ() {
  if(userAnswers[idx] === null) return;
  
  if(idx < QUESTIONS.length - 1) {
    idx++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQ() {
  if(idx > 0) {
    idx--;
    renderQuestion();
  }
}

function finishQuiz() {
  viewQuiz.style.display = 'none';
  viewResult.style.display = 'flex';
  miniScore.style.display = 'none';
  
  document.getElementById('resScore').textContent = score;
  document.getElementById('resTotal').textContent = QUESTIONS.length;
  document.getElementById('resWrong').textContent = QUESTIONS.length - score;
  document.getElementById('resPct').textContent = Math.round((score/QUESTIONS.length)*100) + '%';
  
  // Confetti
  if(navigator.vibrate) navigator.vibrate([50,50,50,50,50]);
}

function restart() {
  idx = 0;
  score = 0;
  userAnswers.fill(null);
  miniScore.textContent = '0';
  viewResult.style.display = 'none';
  startQuiz();
}

/* Background FX */
const cvs = document.getElementById('fx');
// Check if canvas exists to avoid error if loading order is weird (defer helps)
if(cvs) {
    const ctx = cvs.getContext('2d');
    let w, h;
    const parts = [];

    window.onresize = () => {
    w = cvs.width = window.innerWidth;
    h = cvs.height = window.innerHeight;
    };
    window.onresize();

    for(let i=0; i<40; i++) {
    parts.push({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5,
        s: Math.random()*2
    });
    }

    function loop() {
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    parts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0) p.x = w; if(p.x > w) p.x = 0;
        if(p.y < 0) p.y = h; if(p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(loop);
    }
    loop();
}
