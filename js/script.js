const input = document.getElementById('input');



function word(e) {
  var last =  e[String(e).length -1];
  if (last !== " "){
    console.log(e);
  }
  else {
    input.value = "";
  }
}


/**
 * 1. Limpar digitador ao dar espaço.
 * 2. colocar a proxima palavra em cinza.
 */