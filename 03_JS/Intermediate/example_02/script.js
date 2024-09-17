const pokemons = document.querySelector('.pokemons');

const baseURL = 'https://pokeapi.co/api/v2';
const resource = '/pokemon/ditto';
fetch(`${baseURL}${resource}`)
  .then(res => res.json())
  .then(pokemon => {
    const div = document.createElement('div');
    div.innerText = `${pokemon.id} ${pokemon.name} `;
    pokemons.appendChild(div);
  })

