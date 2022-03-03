const pizzaNav = document.querySelector(".pizzas-botoes");
const pizzaBotoes = document.querySelectorAll(".pizza-botao");
const sabores = ["picanha", "vegana", "calabreza", "champion"];
const pizzaUl = document.querySelector(".pizzas");
const pizzaTexto = document.querySelectorAll(".pizza-texto");
const btnSombra = document.querySelector(".botao-fundo");
const sombraPosicao = ["178px", "392px", "605px", "828px"];

let podeTrocar = true;
let habilitaAutoPlay = true;
let loop = 0;

// Evento de click

pizzaNav.addEventListener("click", function (event) {
  event.preventDefault;
  let alvo = event.target;
  let paiDoAlvo = alvo.parentNode;
  let li = paiDoAlvo.parentNode;

  identificaBotao(li, pizzaBotoes);
});

//Evento de hover

pizzaNav.addEventListener("mouseover", function (event) {
  event.preventDefault;
  let alvo = event.target;
  let paiDoAlvo = alvo.parentNode;
  let li = paiDoAlvo.parentNode;

  identificaBotao(li, pizzaBotoes);
});

// Funções

function identificaBotao(alvo, selecionado) {
  if (alvo == selecionado[0] && podeTrocar) {
    podeTrocar = false;
    btnSombra.style.left = sombraPosicao[0];
    rodaPizza(pizzaUl, sabores[0]);
    limpaTexto(pizzaTexto, 0);
  }
  if (alvo == selecionado[1] && podeTrocar) {
    podeTrocar = false;
    btnSombra.style.left = sombraPosicao[1];
    rodaPizza(pizzaUl, sabores[1]);
    limpaTexto(pizzaTexto, 1);
  }
  if (alvo == selecionado[2] && podeTrocar) {
    podeTrocar = false;
    btnSombra.style.left = sombraPosicao[2];
    rodaPizza(pizzaUl, sabores[2]);
    limpaTexto(pizzaTexto, 2);
  }
  if (alvo == selecionado[3] && podeTrocar) {
    podeTrocar = false;
    btnSombra.style.left = sombraPosicao[3];
    rodaPizza(pizzaUl, sabores[3]);
    limpaTexto(pizzaTexto, 3);
  }
}

function limpaTexto(texto, numero) {
  texto.forEach(function (filho) {
    filho.classList.remove("ativo");
  });
  setTimeout(() => {
    texto[numero].classList.add("ativo");
  }, 1600);
}

function rodaPizza(alvo, sabor) {
  let teste = alvo.classList.remove(
    "picanha",
    "vegana",
    "calabreza",
    "champion"
  );
  pizzaUl.classList.add(sabor);
  console.log(alvo.classList);
}

function autoPlay(posicao) {
  podeTrocar = false;
  btnSombra.style.left = sombraPosicao[posicao];
  rodaPizza(pizzaUl, sabores[posicao]);
  limpaTexto(pizzaTexto, posicao);
}

function verificaAutoPlay() {
  if (habilitaAutoPlay && podeTrocar) {
    autoPlay(loop);
    if (loop < 3) {
      loop++;
    } else {
      loop = 0;
    }
  }
  console.log(loop);
}

function verificaTroca() {
  if (!podeTrocar) {
    podeTrocar = true;
  }
}

setInterval(verificaTroca, 1600);
setInterval(verificaAutoPlay, 5000);
