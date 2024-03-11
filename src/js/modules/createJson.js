import { getDataProdutos} from './getDataProdutos.js';
import { formatarData } from './dateTimeUtils.js';
import { getCheckedRadio } from './utils.js';

function createJSON() {
  const naturezaOperacao = document.getElementById("naturezaOperacao");
  const tipoNota = getCheckedRadio(document.querySelectorAll('input[name="tipoNota"]'));
  const fretePorConta = document.getElementById("fretePorConta");
  const dataEmissao = formatarData(document.getElementById("dataEmissao").value)
  const produtos = getDataProdutos();

  let dados = {
      nota: {
          numero: document.getElementById("numNota").innerText,
          serie: document.getElementById("serieNota").innerText,
          dataEmissao: dataEmissao,
          data: document.getElementById("dataEHora").value.split(" ")[0],
          naturezaOp: naturezaOperacao.options[naturezaOperacao.selectedIndex].innerText,
          tipo: tipoNota
      },
      emitente: {
          razaoSocial: document.getElementById("razaoSocialEmitente").value,
          cpfCNPJ: document.getElementById("cpfCNPJEmitente").value,
          inscricaoEstadual: document.getElementById("inscEstadualEmitente").value,
          telefone: document.getElementById("telefoneEmitente").value,
          cep: document.getElementById("cepEmitente").value,
          rua: document.getElementById("ruaEmitente").value,
          numero: document.getElementById("numeroEmitente").value,
          bairro: document.getElementById("bairroEmitente").value,
          cidade: document.getElementById("cidadeEmitente").value,
          estado: document.getElementById("estadoEmitente").value
      },
      destinatario: {
          razaoSocial: document.getElementById("razaoSocialDestinatario").value,
          cpfCNPJ: document.getElementById("cpfCNPJDestinatario").value,
          inscricaoEstadual: document.getElementById("inscEstadualDestinatario").value,
          telefone: document.getElementById("telefoneDestinatario").value,
          cep: document.getElementById("cepDestinatario").value,
          rua: document.getElementById("ruaDestinatario").value,
          numero: document.getElementById("numeroDestinatario").value,
          bairro: document.getElementById("bairroDestinatario").value,
          cidade: document.getElementById("cidadeDestinatario").value,
          estado: document.getElementById("estadoDestinatario").value
      },
      transportador: {
          razaoSocial: document.getElementById("razaoSocialTransporte").value,
          cnpj: document.getElementById("CNPJTransporte").value,
          inscricaoEstadual: document.getElementById("inscEstadualTransporte").value,
          telefone: document.getElementById("telefoneTransporte").value,
          fretePorConta: fretePorConta.options[fretePorConta.selectedIndex].value,
          valorFrete: document.getElementById("valorFreteTransporte").value,
          pesoBruto: document.getElementById("pesoBrutoTransporte").value,
          cep: document.getElementById("cepTransporte").value,
          rua: document.getElementById("ruaTransporte").value,
          numero: document.getElementById("numeroTransporte").value,
          bairro: document.getElementById("bairroTransporte").value,
          cidade: document.getElementById("cidadeTransporte").value,
          estado: document.getElementById("estadoTransporte").value
      },
      produtos: produtos,
      adicionais : {
        infosComplementares: document.getElementById("infosComplementares").value,
        reservadoFisco: document.getElementById("reservadoFisco").value
      }
  };

  return dados;
}

export {createJSON}