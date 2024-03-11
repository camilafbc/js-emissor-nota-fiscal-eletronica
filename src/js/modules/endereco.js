async function buscarEndereco(cep){

  let validacep = /^[0-9\-]{9}$/;

  if(validacep.test(cep)){
    const busca = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const result = await busca.json();
    return result;
  }
}

function preencherCampos(endereco, ruaInput, bairroInput, cidadeInput, estadoInput){
  ruaInput.value = `${endereco.logradouro}`;
  bairroInput.value = `${endereco.bairro.replace("Residencial", "").replace("de Lavras", "")}`;
  cidadeInput.value = `${endereco.localidade}`;
  estadoInput.value = `${endereco.uf}`;
}

function erroCEP(saidaInput, cepInput){
  saidaInput.innerText = "CEP não encontrado";
  saidaInput.classList.add("error");
  cepInput.classList.add("is-invalid");
}

function limparErro(saidaInput, cepInput){
  saidaInput.innerText = "";
  saidaInput.classList.remove("error");
  cepInput.classList.remove("is-invalid");
}

export {buscarEndereco, preencherCampos, erroCEP, limparErro}