const input = document.getElementById('input');
const spanList = document.getElementsByTagName("span");
const whiteboard = document.getElementById("whiteboard");
const timerClock = document.getElementById("timer");
const result = document.getElementsByClassName("result");

const teclas = document.getElementById("teclas");
const teclasCertas = document.getElementById("teclasCertas");
const teclasErradas = document.getElementById("teclasErradas");

const ppm = document.getElementById("ppm");
const palavras = document.getElementById("palavras");
const palavrasCertas = document.getElementById("palavrasCertas");
const palavrasErradas = document.getElementById("palavrasErradas");

const precisao = document.getElementById("precisao");


var easyWords = ["ainda", "outra", "pode", "três", "local", "processo", "já", "Brasil", "à", "grupo", "afirmou", "será", "local", "rio", "pelo", "têm", "Fernando", "se", "de", "cerca", "eles", "não", "casa", "mundo", "pouco", "como", "e", "tem", "jogo", "da", "no", "são", "agora", "foram", "alguns", "vai", "se", "esporte", "lazer", "espaço", "sucesso", "página", "mais", "durante", "nada", "se", "especial", "maior", "muito", "estado", "foram", "hoje", "eu", "final", "dia", "novo", "povo", "plano", "pano", "dias", "programa", "apenas", "tempo", "desde", "cada", "parte", "assim", "teste", "sal", "nacional", "estão", "preços", "casa", "cana", "pão", "tempero", "olho", "equipe", "número", "espião", "vez", "em", "seja", "ano", "reportagem", "José", "Ana", "lei", "jogos", "amanhã", "mesmo", "qual", "suas", "muito", "menos", "folha", "melhor", "ter", "qualquer", "governo", 
"estava"]

var id = 0;
var sizeWord = 0;
var correct = false;
var teste = [];
var timer = 60;


var countWords = 0;
var countWordsCorrets = 0;
var countWordsLooses = 0;

var countletter = 0;
var countletterCorrets = 0;
var countletterLooses = 0;

geradorFrases();

function geradorFrases() {
  var spans = '';

  for (var i = 0; i <= 100; i++) {
    //Puxa do índice 0 até 100
    randomIndice = Math.floor(Math.random() * 101);
    spans += `<span id='${i}' class=''>${easyWords[randomIndice]}</span>`;

    teste.push(easyWords[randomIndice]);
  }

  whiteboard.innerHTML = spans;
}

function word(e) {
  if (countletter == 0){
    clock();
  }
  
  var last =  e[String(e).length -1];
  if (last == " "){
    finishWord(correct);
    return;
  }

  var  sizeWord= e.length; 
  compareWord(e, sizeWord, id);
}

function finishWord(correct) {
  input.value = "";
  sizeWord = 0;
  spanList[id].classList.add("displayNone");
  removeColor(id, "bgGray");
  removeColor(id, "bgRed");

  countWords +=1;

  if (correct) {
    countWordsCorrets +=1;
  }else {
    countWordsLooses += 1;

  }
  id++;
  addColor(id, "bgGray");
}

function compareWord(word, size, id){
  var trueWord = String(teste[id]).slice(0, size);

  countletter +=1;

  if (trueWord != word) {
    removeColor(id, "bgGray");
    addColor(id, "bgRed");
    correct = false;
    countletterLooses += 1;
  }else{
    removeColor(id, "bgRed");
    addColor(id, "bgGray");
    correct = true;
    countletterCorrets += 1;
  }
}

function clock() {

  var t = setInterval(() => {

    timer-= 1;
    timerClock.innerText = "0:" + timer;

    if( timer == 0) {
      clearInterval(t);
      input.value = "";
      input.setAttribute("disabled", true);
      whiteboard.classList.add("disabled");

      ppm.innerText = countWordsCorrets + " PPM";
      palavras.innerText = countWords;
      palavrasCertas.innerText = countWordsCorrets;
      palavrasErradas.innerText = countWordsLooses;

      teclas.innerText = countletter;
      teclasCertas.innerText = countletterCorrets;
      teclasErradas.innerText = countletterLooses;

      result[0].classList.add("enable");
      result[0].classList.remove("disabled");

      precisao.innerText = ((countWordsCorrets / countWords) * 100) + " %" ;
    }

    

  }, 1000);

}


function reset() {
  
  input.removeAttribute("disabled")
  whiteboard.classList.remove("disabled");

  result[0].classList.add("disabled");
  result[0].classList.remove("enable");
  
  timerClock.innerText = "1:00";
  

  id = 0;
  sizeWord = 0;
  timer = 60;
  correct = false;
  teste = [];


  countWords = 0;
  countWordsCorrets = 0;
  countWordsLooses = 0;

  countletter = 0;
  countletterCorrets = 0;
  countletterLooses = 0;

  geradorFrases();

}

function addColor(n, colorClass) {
  spanList[n].classList.add(colorClass);
}

function removeColor(n, colorClass) {
  spanList[n].classList.remove(colorClass);
}




/**
 * 1. Printar as frases com palavras aleatóreas.
 * 2. Exibir 2 linhas com 50 caracteres.
 * 3. Fazer linhas subir apósser finalizada.
 */