let screen = document.getElementById('idscreen');
let num = [];
for (let i = 0; i <= 9; i++) {
  num[i] = document.getElementById(`id${i}`);
}

let soma = document.getElementById('idsum');
let sub = document.getElementById('idsub');
let mult = document.getElementById('idmult');
let div = document.getElementById('iddiv');
let back = document.getElementById('idback');
let dot = document.getElementById('iddot');
let resposta = document.getElementById('idres');
let reset = document.getElementById('idreset');
let oper = null;
let num1 = null;
let num2 = null;
let dotNum = false;
let test_1_apagar = false;
let test_2_apagar = false;

soma.addEventListener('click', function () {
  addNumber('+')
});
sub.addEventListener('click', function () {
  addNumber('-')
});
mult.addEventListener('click', function () {
  addNumber('*')
});
div.addEventListener('click', function () {
  addNumber('/')
});
dot.addEventListener('click', function () {
  addNumber('.')
  dotNum = true;
});
resposta.addEventListener('click', function () {
  if (num1 !== null && oper !== null && num2 !== null) {
    calcular(num1, oper, num2);
  }
});
reset.addEventListener('click', function () {
  location.reload();
});


num[0].addEventListener('click', function () {
  addNumber(num[0].value)
});
num[1].addEventListener('click', function () {
  addNumber(num[1].value)
});
num[2].addEventListener('click', function () {
  addNumber(num[2].value)
});
num[3].addEventListener('click', function () {
  addNumber(num[3].value)
});
num[4].addEventListener('click', function () {
  addNumber(num[4].value)
});
num[5].addEventListener('click', function () {
  addNumber(num[5].value)
});
num[6].addEventListener('click', function () {
  addNumber(num[6].value)
});
num[7].addEventListener('click', function () {
  addNumber(num[7].value)
});
num[8].addEventListener('click', function () {
  addNumber(num[8].value)
});
num[9].addEventListener('click', function () {
  addNumber(num[9].value)
});


back.addEventListener('click', function () {
  removeNumber();
});

function addNumber(num) {
  if ((num == "+" || num == "-" || num == "*" || num == "/") && num1 !== null && num2 === null) {

    oper = num;
    screen.textContent = oper;
    dotNum = false;
    test_1_apagar = false;
    test_2_apagar = true;

  } else if ((num >= 0 && num <= 9 && oper === null) || ((num === "." && dotNum === false) && num2 === null)) {
    test_1_apagar = true;
    num1 = screen.textContent + num;
    screen.textContent = num1;

  } else if (num1 !== null && oper !== null) {
    if ((num >= 0 && num <= 9) || (num === "." && dotNum === false)) {

      if (screen.textContent === oper) {
        screen.textContent = null;
      }
      num2 = screen.textContent + num;
      screen.textContent = num2;
    }
  }
}

function removeNumber() {
  let tela = screen.textContent;
  tela = tela.substring(0, tela.length - 1);
  screen.textContent = tela;
  if (test_1_apagar === true) {
    num1 = tela;
  } else if (test_2_apagar === true) {
    num2 = tela;
  }

}

function calcular(num1, oper, num2) {
  if (oper === "+") {
    screen.textContent = (Number(num1) + Number(num2)).toFixed(2);
  }
  if (oper === "-") {
    screen.textContent = (Number(num1) - Number(num2)).toFixed(2);
  }
  if (oper === "*") {
    screen.textContent = (Number(num1) * Number(num2)).toFixed(2);
  }
  if (oper === "/") {
    screen.textContent = (Number(num1) / Number(num2)).toFixed(2);
  }
}

/*
// Supondo que você já tem elementosSelecionados como um array de elementos
var elementosSelecionados = [num[0],num[1],num[2],num[3]]; // Substitua [...] pelos elementos reais

// Função de manipulação de clique
function handleClick(event) {
    // Seu código de manipulação de clique aqui
    console.log('Clique em um elemento:', event.target.id);
}

// Adicionar EventListener de clique a cada elemento
elementosSelecionados.forEach(function(elemento) {
    elemento.addEventListener('click', handleClick);
});
*/





