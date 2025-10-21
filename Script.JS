let todosPersonagens = [];

async function Chamarpersonagens() {
  const url = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(url);
  const result = await response.json();
  
  todosPersonagens = result.results; 
  renderizarPersonagens(todosPersonagens);
}

function renderizarPersonagens(personagens) {
  const container = document.querySelector("#personagens");
  container.innerHTML = ""; 
  personagens.forEach(element => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("imagem");
    img.src = element.image;

    let nome = document.createElement("p");
    nome.textContent = element.name;

    let especie = document.createElement("span");
    especie.textContent = element.species;

    card.addEventListener("click", function() {
      window.location.href = `index2.html?chave=${element.id}`;
    });

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(especie);
    container.appendChild(card);
  });
}


const inputFiltro = document.querySelector("input[type=text]");
inputFiltro.addEventListener("input", () => {
  const filtro = inputFiltro.value.toLowerCase();
  const personagensFiltrados = todosPersonagens.filter(p => p.name.toLowerCase().includes(filtro));
  renderizarPersonagens(personagensFiltrados);
});

Chamarpersonagens();