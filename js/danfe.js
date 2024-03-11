import { formatarSaidaMonetaria, currencyFormat } from './modules/utils.js';

let dados;

if(localStorage.getItem('danfe') != null){
  dados = JSON.parse(localStorage.getItem('danfe'));     
}

const numero = dados.nota.numero;
const numeroFormatado = numero.substring(0, 3) + "." + numero.substring(3, 6) + "." + numero.substring(6, 9)
  
//Main
document.getElementById("tipoNota").innerText = dados.nota.tipo;
document.getElementById("numNota").innerText = numeroFormatado;
document.getElementById("serieNota").innerText = `${dados.nota.serie}`;
document.getElementById("naturezaOp").innerText = `${dados.nota.naturezaOp}`;
document.getElementById("dataEmissao").innerText = `${dados.nota.dataEmissao}`;

// Emitente
document.getElementById("razaoSocialEmitente").innerText = `${dados.emitente.razaoSocial}`;
document.getElementById("enderecoEmitente").innerText = `${dados.emitente.rua}, ${dados.emitente.numero} ${dados.emitente.bairro}`;
document.getElementById("cidadeEstadoCEPEmitente").innerText = `${dados.emitente.cidade} - ${dados.emitente.estado} ${dados.emitente.cep}`;
document.getElementById("telefoneEmitente").innerText = `${dados.emitente.telefone}`;
document.getElementById("inscEstadualEmitente").innerText = `${dados.emitente.inscricaoEstadual}`;
document.getElementById("cpfCNPJEmitente").innerText = `${dados.emitente.cpfCNPJ}`;
    
// DESTINATARIO
document.getElementById("razaoSocialDestinatario").innerText = `${dados.destinatario.razaoSocial}`;
document.getElementById("cpfCNPJDestinatario").innerText = `${dados.destinatario.cpfCNPJ}`;
document.getElementById("enderecoDestinatario").innerText = `${dados.destinatario.rua}, ${dados.destinatario.numero}`;
document.getElementById("bairroDestinatario").innerText = `${dados.destinatario.bairro}`;
document.getElementById("cepDestinatario").innerText = `${dados.destinatario.cep}`;
document.getElementById("dataEntradaSaida").innerText = `${dados.nota.data}`;
document.getElementById("cidadeDestinatario").innerText = `${dados.destinatario.cidade}`;
document.getElementById("telefoneDestinatario").innerText = `${dados.destinatario.telefone}`;
document.getElementById("estadoDestinatario").innerText = `${dados.destinatario.estado}`;
document.getElementById("inscEstadualDestinatario").innerText = `${dados.destinatario.inscricaoEstadual}`;

let data = new Date();
let hora = `${data.getHours().toString().padStart(2, '0')}:${data.getMinutes().toString().padStart(2, '0')}:${data.getSeconds().toString().padStart(2, '0')}`
    
document.getElementById("entradaHora").innerText = hora;


// TRANSPORTE
document.getElementById("razaoSocialTransporte").innerText = `${dados.transportador.razaoSocial}`;
document.getElementById("fretePorConta").innerText = `${dados.transportador.fretePorConta}`;
document.getElementById("CNPJTransporte").innerText = `${dados.transportador.cnpj}`;
document.getElementById("enderecoTransporte").innerText = `${dados.transportador.rua}, ${dados.transportador.numero}`;
document.getElementById("bairroTransporte").innerText = `${dados.transportador.bairro}`;
document.getElementById("cepTransporte").innerText = `${dados.transportador.cep}`;
document.getElementById("inscEstadualTransporte").innerText = `${dados.transportador.inscricaoEstadual}`;
document.getElementById("cidadeTransporte").innerText = `${dados.transportador.cidade}`;
document.getElementById("telefoneTransporte").innerText = `${dados.transportador.telefone}`;
document.getElementById("estadoTransporte").innerText = `${dados.transportador.estado}`;
document.getElementById("pesoBrutoTransporte").innerText = `${dados.transportador.pesoBruto}`;

// PRODUTOS
let produtos = dados.produtos;
  
let totalDescontos = 0;
let totalProdutos = 0;

// function formatarSaidaMonetaria(valor){
//     const valorFormatado = valor.replace(/\./g,'').replace(',','.');
//     return valorFormatado;
// }

//     function currencyFormat(valor){
//       const valorFormatado = valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
//       return valorFormatado;
//     }

for(let i = 0; i < dados.produtos.length; i++){

  document.getElementById("table-body").innerHTML += 
  `
  <tr>
    <td>${produtos[i].codigo}</td>
    <td>${produtos[i].descricao}</td>
    <td>${produtos[i].quantidade}</td>
    <td>${produtos[i].vlUnit}</td>
    <td>${produtos[i].desconto}</td>
    <td>${produtos[i].vlTotal}</td>
  </tr>
  `
  if(!isNaN(parseFloat(produtos[i].desconto))){
    totalDescontos += (parseFloat(formatarSaidaMonetaria(produtos[i].desconto)) * parseInt(produtos[i].quantidade));
  }

  totalProdutos += parseFloat(formatarSaidaMonetaria(produtos[i].vlTotal));
}

let valorFrete = 0;

if(dados.transportador.valorFrete){
  valorFrete = parseFloat(formatarSaidaMonetaria(dados.transportador.valorFrete))
}

let totalNota = totalProdutos + valorFrete;

// Calculos

document.getElementById("saidaTotalProdutos").innerText = currencyFormat(totalProdutos);
document.getElementById("valorDoFrete").innerText = dados.transportador.valorFrete || "0,00";
document.getElementById("saidaDescontos").innerText = currencyFormat(totalDescontos);
document.getElementById("saidaTotalNota").innerText = currencyFormat(totalNota);

// ADICIONAIS
document.getElementById("infosComplementares").innerText = `${dados.adicionais.infosComplementares}`;
document.getElementById("reservadoFisco").innerText = `${dados.adicionais.reservadoFisco}`;