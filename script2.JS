const urlParams = new URLSearchParams(window.location.search);
const valorRecebido = urlParams.get("chave");
async function loadUser(){
    const res = await fetch(`https:/rickandmortyapi.com/api/character/${valorRecebido}`);
    const element = await res.json();
    console.log (valorRecebido)
}
loadUser()
