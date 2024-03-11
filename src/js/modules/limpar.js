export function limpar(){
  if (localStorage.getItem("danfe") != null) {
    
    localStorage.removeItem("danfe");
  }

  window.location.reload();
}