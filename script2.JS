// Pega o ID do personagem enviado pela URL
const urlParams = new URLSearchParams(window.location.search);
const valorRecebido = urlParams.get("chave");

async function loadUser() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${valorRecebido}`);
  const element = await res.json();

  const container = document.querySelector("#personagem");

  // Estrutura principal
  const header = document.createElement("div");
  header.classList.add("header");

  const img = document.createElement("img");
  img.src = element.image;
  img.alt = element.name;

  const nome = document.createElement("h1");
  nome.textContent = element.name;

  header.appendChild(img);
  header.appendChild(nome);


  const infoSection = document.createElement("div");
  infoSection.classList.add("info-section");


  const infoLeft = document.createElement("div");
  infoLeft.classList.add("info-left");

  infoLeft.innerHTML = `
    <h2>Informations</h2>
    <p><strong>Gender:</strong> ${element.gender}</p>
    <p><strong>Status:</strong> ${element.status}</p>
    <p><strong>Specie:</strong> ${element.species}</p>
    <p><strong>Origin:</strong> ${element.origin.name}</p>
    <p><strong>Type:</strong> ${element.type || "Unknown"}</p>
    <p><strong>Location:</strong> ${element.location.name}</p>
  `;


  const infoRight = document.createElement("div");
  infoRight.classList.add("info-right");

  const episodesTitle = document.createElement("h2");
  episodesTitle.textContent = "Episodes";
  infoRight.appendChild(episodesTitle);


  const episodes = element.episode.slice(0, 4);

  for (const epUrl of episodes) {
    const epRes = await fetch(epUrl);
    const epData = await epRes.json();

    const epItem = document.createElement("div");
    epItem.classList.add("episode");

    epItem.innerHTML = `
      <h3>${epData.episode}</h3>
      <p>${epData.name}</p>
      <span>${new Date(epData.air_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}</span>
    `;

    infoRight.appendChild(epItem);
  }

  infoSection.appendChild(infoLeft);
  infoSection.appendChild(infoRight);


  container.appendChild(header);
  container.appendChild(infoSection);
}

loadUser();
