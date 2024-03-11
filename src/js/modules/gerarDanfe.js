import { createJSON } from './createJson.js';

export function gerarDanfe() {
  let dados;
  let danfeSave;

  if (localStorage.getItem("danfe") != null) {
    dados = JSON.parse(localStorage.getItem("danfe"));
  }

  dados = createJSON();

  if(document.getElementById("checkSalvarRemetente").checked){

    danfeSave = {
      numeroNota: dados.nota.numero,
      emitente: {
        razaoSocial: dados.emitente.razaoSocial,
        cpfCNPJ: dados.emitente.cpfCNPJ,
        inscricaoEstadual: dados.emitente.inscricaoEstadual,
        telefone: dados.emitente.telefone,
        cep: dados.emitente.cep, 
        rua: dados.emitente.rua, 
        numero: dados.emitente.numero,
        bairro: dados.emitente.bairro, 
        cidade: dados.emitente.cidade,
        estado: dados.emitente.estado
      }
    }

  } else {

    danfeSave = {numeroNota: dados.nota.numero};
  }

  if(dados.nota.tipo){

    localStorage.setItem("danfe", JSON.stringify(dados));
    localStorage.setItem('danfe-save', JSON.stringify(danfeSave))

    window.open("../src/pages/danfe.html");

  } else {
  
    Swal.fire({
      text: "Defina o tipo da nota!",
      icon: "info",
      showConfirmButton: false,
      timer: 3000
    });
    
  }
};