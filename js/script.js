const input = document.getElementById('input');
const spanList = document.getElementsByTagName("span");
const whiteboard = document.getElementById("whiteboard");
// spanList[0].innerText = 'Fora';

var easyWords = ["ainda", "outra", "pode", "três", "local", "processo", "já", "Brasil", "à", "grupo", "afirmou", "será", "local", "rio", "pelo", "têm", "Fernando", "se", "de", "cerca", "eles", "não", "casa", "mundo", "pouco", "como", "e", "tem", "jogo", "da", "no", "são", "agora", "foram", "alguns", "vai", "se", "esporte", "lazer", "espaço", "sucesso", "página", "mais", "durante", "nada", "se", "especial", "maior", "muito", "estado", "foram", "hoje", "eu", "final", "dia", "novo", "povo", "plano", "pano", "dias", "programa", "apenas", "tempo", "desde", "cada", "parte", "assim", "teste", "sal", "nacional", "estão", "preços", "casa", "cana", "pão", "tempero", "olho", "equipe", "número", "espião", "vez", "em", "seja", "ano", "reportagem", "José", "Ana", "lei", "jogos", "amanhã", "mesmo", "qual", "suas", "muito", "menos", "folha", "melhor", "ter", "qualquer", "governo", 
"estava"]

var textos = ["Fora", "de", "contexto"];
var id = 0;
var sizeWord = 0;
var correct = false;

geradorFrases();

function geradorFrases() {
  var contador = 0;
  
  whiteboard.innerHTML = "<span id='3' class=''>qeue</span>";

  for (var i; i <= 102; i++) {
    
  }




  //Puxa do índice 0 até 101
  console.log(easyWords[Math.floor(Math.random() * 102)]);
}

function word(e) {
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
  removeColor(id, "bgGray");
  removeColor(id, "bgRed");

  if (correct) {
    addColor(id, "success");
  }else {
    addColor(id, "failure");
  }
  id++;
  addColor(id, "bgGray");
}

function compareWord(word, size, id){
  var trueWord = String(textos[id]).slice(0, size);

  if (trueWord != word) {
    removeColor(id, "bgGray");
    addColor(id, "bgRed");
    correct = false;
  }else{
    removeColor(id, "bgRed");
    addColor(id, "bgGray");
    correct = true;
  }
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