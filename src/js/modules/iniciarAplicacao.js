import { formatarNumeroNota } from "./utils.js";
import { formatarDataEHora } from "./dateTimeUtils.js";

export function iniciarAplicacao() {
  let dados;
  let numNota;

  // Setar Data e Hora
  const date = new Date();
  document.getElementById("dataEmissao").valueAsDate = date;

  setInterval(() => {
    const dataAtual = new Date()
    document.getElementById("dataEHora").value = formatarDataEHora(dataAtual);
  }, 1000)

  document.getElementById("razaoSocialEmitente").focus();

  if (localStorage.getItem("danfe-save") != null) {
    dados = JSON.parse(localStorage.getItem("danfe-save"));

    if (dados.emitente) {
      document.getElementById("checkSalvarRemetente").checked = true;
      document.getElementById("razaoSocialEmitente").value = dados.emitente.razaoSocial;
      document.getElementById("cpfCNPJEmitente").value = dados.emitente.cpfCNPJ;
      document.getElementById("inscEstadualEmitente").value = dados.emitente.inscricaoEstadual;
      document.getElementById("telefoneEmitente").value = dados.emitente.telefone;
      document.getElementById("cepEmitente").value = dados.emitente.cep;
      document.getElementById("ruaEmitente").value = dados.emitente.rua;
      document.getElementById("numeroEmitente").value = dados.emitente.numero;
      document.getElementById("bairroEmitente").value = dados.emitente.bairro;
      document.getElementById("cidadeEmitente").value = dados.emitente.cidade;
      document.getElementById("estadoEmitente").value = dados.emitente.estado;
    }

    numNota = parseInt(dados.numeroNota);
    numNota++;
    document.getElementById("numNota").innerText = formatarNumeroNota(
      numNota.toString()
    );
  }
}
