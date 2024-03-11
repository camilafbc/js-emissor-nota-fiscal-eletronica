/* 
* Função recebe uma data tipo string no formato 'yy-mm-dd' ou 'dd-mm-yy' e retorna sua formatação reversa
*/
function formatarData(data) {
  const dataSplit = data.split("-");
  const novaData = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`;
  return novaData;
}

/*
* Função recebe um objeto tipo Date e retorna uma string formatada em 'dd/mm/yy hh:MM:ss'
*/
function formatarDataEHora(data){
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');
  const segundos = data.getSeconds().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

export { formatarData, formatarDataEHora }