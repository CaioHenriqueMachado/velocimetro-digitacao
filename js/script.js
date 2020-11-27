const input = document.getElementById('input');
const spanList = document.getElementsByTagName("span");
spanList[0].innerText = 'Fora';
console.log();

var textos = ["Fora", "de", "contexto"];

var id = 0;

function word(e) {
  
  var last =  e[String(e).length -1];
  if (last == " "){
    input.value = "";
    var sizeWord = 0;
    id++;
    return;
  }

  var  sizeWord= e.length; 
  compareWord(e, sizeWord, id);
  console.log(e);
  console.log(sizeWord + '<-')
}



function compareWord(word, size, id){
  var trueWord = String(textos[id]).slice(0, size);
  console.log('PALAVRA:' + trueWord);
  if (trueWord != word) {

  }

}
/*
 * 2. colocar a proxima palavra em cinza.
 */