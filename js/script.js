const input = document.getElementById('input');
const spanList = document.getElementsByTagName("span");
spanList[0].innerText = 'Fora';

var textos = ["Fora", "de", "contexto"];
var id = 0;
var sizeWord = 0;
var correct = false;

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
