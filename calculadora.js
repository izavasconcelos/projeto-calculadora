/*
    Calculadora Iza
*/
//Funções
var valorAnterior = "";
var valorTela = "";
var valorAcao = "";

function botaoDigitoClick(event) {
  var digito = event.target.value;
  atualizarTela(`${valorTela}${digito}`);
}
function botaoAcaoClick(event) {
  var acao = event.target.value;
  realizarAcao(acao);
}

function atualizarTela(valor) {
  valorTela = valor;
  document.getElementById("res").innerText = valor;
}

function realizarAcao(acao) {
  if (acao === "=") {
    // Testa qual operação foi selecionada
    if (valorAcao === "+")
      var resultado = parseInt(valorAnterior) + parseInt(valorTela);
    else if (valorAcao === "-")
      var resultado = parseInt(valorAnterior) - parseInt(valorTela);
    else if (valorAcao === "*")
      var resultado = parseInt(valorAnterior) * parseInt(valorTela);
    else if (valorAcao === "/")
      var resultado = parseInt(valorAnterior) / parseInt(valorTela);

    atualizarTela(resultado);
  } else {
    if (acao === "c") {
      location.reload();
    }
    valorAnterior = valorTela;
    atualizarTela("");
    valorAcao = acao;
  }
}
