import { formatarSaidaMonetaria, currencyFormat } from './utils.js';

let contador = 1;
let valorFrete = 0;

document.getElementById("valorFreteTransporte").addEventListener('blur', function () {
  if(this.value != ""){
    document.getElementById("entradaFrete").innerText = this.value;
    valorFrete = parseFloat(formatarSaidaMonetaria(this.value))
    console.log("Frete: " + valorFrete)
  } 
})

function preencherTabela(codigo, descricao, quantidade, valorUnitario, desconto){

  const valorDesconto = desconto.value != "" ? formatarSaidaMonetaria(desconto.value) : 0;
  const valorComDesconto = parseFloat(formatarSaidaMonetaria(valorUnitario.value)) - parseFloat(valorDesconto);
  const valorTotal = parseFloat((valorComDesconto * parseInt(quantidade.value)));


  const tabela = document.getElementById("inserirProdutos")

  const tableRow = `
  <tr class="data-row">
    <td class="">${contador}</td>
    <td class="">${codigo.value}</td>
    <td class="">${descricao.value}</td>
    <td class="text-center">${quantidade.value}</td>
    <td class="text-end">${valorUnitario.value}</td>
    <td class="text-end">${desconto.value != "" ? desconto.value : "-"}</td>
    <td class="text-end">${currencyFormat(valorTotal)}</td>
  </tr>
  `
  tabela.innerHTML += tableRow;
  contador++;

  atualizarTotais()
  limparEntradas(codigo, descricao, quantidade, valorUnitario, desconto)
}

function limparEntradas(...inputs) {
  inputs.forEach( el => el.value = "" )
}

function atualizarTotais(){

  let somaDescontos = 0;
  let somaProdutos = 0;
  let somaNota = 0;

  const tabelaProdutos = document.getElementById("table");

  for (let i = 1; i < tabelaProdutos.rows.length; i++) {

    let celulas = tabelaProdutos.rows[i].cells;

    celulas[0].innerText = i;
    const quantidade = parseInt(celulas[3].innerText)
    const desconto = celulas[5].innerText == "-" ? 0 : formatarSaidaMonetaria(celulas[5].innerText)
    const total = formatarSaidaMonetaria(celulas[6].innerText)

    somaDescontos += parseFloat(quantidade * parseFloat(desconto))
    somaProdutos += parseFloat(total)
    somaNota += parseFloat(total)
  }

  document.getElementById("entradaDescontos").innerText = currencyFormat(somaDescontos)
  document.getElementById("entradaTotalProdutos").innerText = currencyFormat(somaProdutos)
  document.getElementById("entradaTotalNota").innerText = currencyFormat(parseFloat(somaProdutos + valorFrete))
}

export { preencherTabela, atualizarTotais }