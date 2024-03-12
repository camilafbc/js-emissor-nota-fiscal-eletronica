import { buscarEndereco,preencherCampos,erroCEP,limparErro } from "./modules/endereco.js";
import { gerarDanfe } from './modules/gerarDanfe.js';
import { iniciarAplicacao } from './modules/iniciarAplicacao.js';
import { aplicarMascaras } from './modules/inputHandler.js';
import { limpar } from './modules/limpar.js';
import { mascaraCpfOuCNPJ, mascaraTelefone, mascaraNumerica, mascaraMoeda, mascaraPeso } from './modules/masks.js';
import { ativarNavLink, ativarTab } from './modules/navTabs.js';
import { preencherTabela, atualizarTotais } from "./modules/tabelaDeProdutos.js";

// Inicia a Aplicação
iniciarAplicacao();

// Navegação entre as abas
[
  document.getElementById("estadoEmitente"),
  document.getElementById("estadoDestinatario"),
  document.getElementById("estadoTransporte"),
].forEach((el) => {
  el.addEventListener("blur", () => {
    ativarNavLink(), ativarTab();
  });
});

document.getElementById("nav-tab").addEventListener('click', (ev) => {
  const tabId = ev.target.getAttribute("data-bs-target").replace("#", "");
  document.getElementById(tabId).childNodes[1][0].focus();
});

// Aplicação de Máscaras
const telefoneEmitente = document.getElementById("telefoneEmitente");
const telefoneDestinatario = document.getElementById("telefoneDestinatario");
const telefoneTransporte = document.getElementById("telefoneTransporte");
aplicarMascaras(mascaraTelefone, telefoneEmitente, telefoneDestinatario, telefoneTransporte);

const cpfCNPJEmitente = document.getElementById("cpfCNPJEmitente");
const cpfCNPJDestinatario = document.getElementById("cpfCNPJDestinatario");
const CNPJTransporte = document.getElementById("CNPJTransporte");
aplicarMascaras(mascaraCpfOuCNPJ, cpfCNPJEmitente, cpfCNPJDestinatario, CNPJTransporte);

const inscEstadualEmitente = document.getElementById("inscEstadualEmitente");
const inscEstadualDestinatario = document.getElementById("inscEstadualDestinatario");
const inscEstadualTransporte = document.getElementById("inscEstadualTransporte");
const numeroEmitente = document.getElementById("numeroEmitente");
const numeroDestinatario = document.getElementById("numeroDestinatario");
const numeroTransporte = document.getElementById("numeroTransporte");
const codigoProduto = document.getElementById("codigoProduto");
const quantidadeProduto = document.getElementById("quantidadeProduto");
aplicarMascaras(mascaraNumerica, inscEstadualEmitente, inscEstadualDestinatario, inscEstadualTransporte, numeroEmitente, numeroDestinatario, numeroTransporte, codigoProduto, quantidadeProduto);

const valorFreteTransporte = document.getElementById('valorFreteTransporte');
const valorProduto = document.getElementById('valorProduto');
const descontoProduto = document.getElementById('descontoProduto');
aplicarMascaras(mascaraMoeda, valorFreteTransporte, valorProduto, descontoProduto);

const pesoBrutoTransporte = document.getElementById('pesoBrutoTransporte');
aplicarMascaras(mascaraPeso, pesoBrutoTransporte);

// Inclusão de produtos na tabela
document.getElementById("btnIncluirProduto").addEventListener("click", (ev) => {
  ev.preventDefault();

  const codigo = document.getElementById("codigoProduto");
  const descricao = document.getElementById("descricaoProduto");
  const quantidade = document.getElementById("quantidadeProduto");
  const valorUnitario = document.getElementById("valorProduto");
  let descontoProduto = document.getElementById("descontoProduto");

  if(codigo.value != "" && descricao.value != "" && quantidade.value != "" && valorUnitario.value != ""){
    preencherTabela(
      codigo,
      descricao,
      quantidade,
      valorUnitario,
      descontoProduto
    );

    codigo.focus();
  }
  else {
    Swal.fire({
      text: "Preencha todos os campos para inserir um produto!",
      icon: "warning",
      showConfirmButton: false,
      timer: 3000
    });
  }

});

// Seleção de linha na tabela de Produtos
document.querySelector('tbody').addEventListener('click', function(event) {
  event.target.parentElement.classList.toggle('selected-row')
});

// Exclusão de Produto da Tabela
document.getElementById('btnExcluirProduto').addEventListener('click', function(){

  const linhas = document.querySelectorAll('.selected-row');

  if(linhas.length == 0){
  } else {
    linhas.forEach((linha) => {
      linha.remove()
      atualizarTotais()
    })
  }
});

// Gerar DANFE
document.getElementById("btn-gerar-danfe").addEventListener('click', () => { gerarDanfe() });

// Limpar Nota
document.getElementById("btn-limpar-danfe").addEventListener("click", (ev) => {
  ev.preventDefault();
  limpar();
});

// Endereço TAB Emitente
const cepEmitenteInput = document.getElementById("cepEmitente");
const saidaErroEmitente = document.getElementById("saida");

cepEmitenteInput.addEventListener("blur", async () => {
  const enderecoEmitente = await buscarEndereco(cepEmitenteInput.value);
  if (!enderecoEmitente.erro) {
    preencherCampos(
      enderecoEmitente,
      document.getElementById("ruaEmitente"),
      document.getElementById("bairroEmitente"),
      document.getElementById("cidadeEmitente"),
      document.getElementById("estadoEmitente")
    );

    document.getElementById("numeroEmitente").focus();
  } else {
    erroCEP(saidaErroEmitente, cepEmitenteInput);
  }
});

cepEmitenteInput.addEventListener("input", function () {
  limparErro(saidaErroEmitente, cepEmitenteInput);

  let inputValue = this.value.replace(/\D/g, "");

  if (inputValue.length == 8) {
    inputValue = inputValue.substring(0, 5) + "-" + inputValue.substring(5, 8);
  }
  this.value = inputValue;
});

// Endereço TAB Destinatario
const cepDestinatarioInput = document.getElementById("cepDestinatario");
const saidaErroDestinatario = document.getElementById("saidaErroDestinatario");

cepDestinatarioInput.addEventListener("blur", async () => {
  const enderecoDestinatario = await buscarEndereco(cepDestinatarioInput.value);

  if (!enderecoDestinatario.erro) {
    preencherCampos(
      enderecoDestinatario,
      document.getElementById("ruaDestinatario"),
      document.getElementById("bairroDestinatario"),
      document.getElementById("cidadeDestinatario"),
      document.getElementById("estadoDestinatario")
    );

    document.getElementById("numeroDestinatario").focus();
  } else {
    erroCEP(saidaErroDestinatario, cepDestinatarioInput);
  }
});

cepDestinatarioInput.addEventListener("input", function () {
  limparErro(saidaErroDestinatario, cepDestinatarioInput);

  let inputValue = this.value.replace(/\D/g, "");

  if (inputValue.length == 8) {
    inputValue = inputValue.substring(0, 5) + "-" + inputValue.substring(5, 8);
  }
  this.value = inputValue;
});

// Endereço TAB Transporte
const cepTransporteInput = document.getElementById("cepTransporte");
const saidaErroTransporte = document.getElementById("saidaErroTransporte");

cepTransporteInput.addEventListener("blur", async () => {
  const enderecoTransporte = await buscarEndereco(cepTransporteInput.value);

  if (!enderecoTransporte.erro) {
    preencherCampos(
      enderecoTransporte,
      document.getElementById("ruaTransporte"),
      document.getElementById("bairroTransporte"),
      document.getElementById("cidadeTransporte"),
      document.getElementById("estadoTransporte")
    );

    document.getElementById("numeroTransporte").focus();
  } else {
    erroCEP(saidaErroTransporte, cepTransporteInput);
  }
});

cepTransporteInput.addEventListener("input", function () {
  limparErro(saidaErroTransporte, cepTransporteInput);

  let inputValue = this.value.replace(/\D/g, "");

  if (inputValue.length == 8) {
    inputValue = inputValue.substring(0, 5) + "-" + inputValue.substring(5, 8);
  }
  this.value = inputValue;
});