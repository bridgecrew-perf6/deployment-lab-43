// axios.get('https://pokeapi.co/api/v2/').then(response => {
//     if(response.status === 200) console.log('Succesfully connected to PokeAPI');
// })

const randomButton = document.getElementById('randPokemon');
const randomShinyButton = document.getElementById('randShinyPokemon');
const pokemonSpriteArea = document.getElementById('pokemonSprites');

function randButton(event) {
    event.preventDefault();

    let shiny = false;

    if(event.srcElement.id === 'randShinyPokemon') shiny = true;

    axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
        
    // TODO: Find dynamic way of finding all of the pokemon.
        let random = Math.floor(Math.random() * (898 - 1) + 1);
        console.log(random);
        getPokemon(random, shiny);
    })
}

function getPokemon(pokemonID, shiny) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(response => {
        const {name, sprites} = response.data;
        // console.log(sprites);
        let frontImg = sprites.front_default;
        let shinyFrontImg = sprites.front_shiny;
        // console.log(name);
        let newElement = document.createElement('img');

        let nameElement = document.createElement('h3');
        nameElement.innerText = name.toUpperCase();
        nameElement.setAttribute('style', `text-align: center;`)

        if(!shiny) {
        newElement.setAttribute("src", frontImg);
        newElement.setAttribute("title", name);
        }
        
        else {
        newElement.setAttribute("src", shinyFrontImg);
        newElement.setAttribute("title", name);
        }

        pokemonSpriteArea.appendChild(nameElement);
        pokemonSpriteArea.appendChild(newElement);
    })
}

randomButton.addEventListener('click', randButton)
randomShinyButton.addEventListener('click', randButton)

console.log(randomButton);