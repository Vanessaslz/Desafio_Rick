async function Chamarpersonagens(){
    const url="https:/rickandmortyapi.com/api/character/"
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
  result.results.forEach(element => {
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.classList.add("imagem")
    let personagens = document.querySelector("#personagens")
    let nome = document.createElement("p")
    let especie = document.createElement("span")
    card.setAttribute("class", "card")
    nome.textContent =element.name
    especie.textContent = element.species
    img.setAttribute("src",element.image)
   


    card.addEventListener("click", function(){
      window.location.href = `index2.HTML?/chave=${id}`;
    })
     card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(especie)
    personagens.appendChild(card)

  });
}
Chamarpersonagens()
