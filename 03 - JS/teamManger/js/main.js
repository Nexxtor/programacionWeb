const basePokeApi = "https://pokeapi.co/api/v2/";
let data = {};
let searchResult = [];
const saveData = () => {
  localStorage.setItem("data", JSON.stringify(data));
};

/**
 * Creara las estructura HTML de una Card con la información de un Pokemon.
 * Toma en cuenta si el pokemon forma parate de los Favs o Team de usuario.
 * @param {object} pokemon Contiene la información sobre el pokemon a mostar
 */
const createPokemonCard = (pokemon) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("col", "mb-4");
  // Default Image Values
  const cardImg = pokemon.img || "img/default_thubmnail.png";
  const favColor =
    data.favs.findIndex((favPokemon) => pokemon.name == favPokemon.name) >= 0
      ? "text-danger"
      : "text-secondary";
  const teamColor =
    data.team.findIndex((teamPokemon) => pokemon.name == teamPokemon.name) >= 0
      ? "text-primary"
      : "text-secondary";
  const cardContent = `
    <div class="card">
      <img src="${cardImg}" class="card-img-top" alt="${pokemon.name}">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">${pokemon.description}</p>
      </div>
      <div class="card-footer d-flex">
        <button data-pokemon='${JSON.stringify(pokemon)}'
            type="button" class="btn btn-light mr-auto fav-pokemon ${
              pokemon.name
            }">
            <i class="fas fa-heart ${favColor} "></i>
        </button>
        <button data-pokemon='${JSON.stringify(pokemon)}'
          type="button" class="btn btn-light team-pokemon ${pokemon.name}">
          <i class="fas fa-bookmark ${teamColor}"></i>
        </button>
      </div>
    </div>`;
  wrapper.innerHTML = cardContent;
  return wrapper;
};

/**
 * Muestra una lista de Card en elemento especificado.
 * Remplazar el contenido actual por el de la lista.
 * @param {array pokemon} list
 * @param {DOMElment} target
 */
const showListAsCard = (list, target) => {
  target.innerHTML = "";
  list.forEach((pokemon) => {
    target.appendChild(createPokemonCard(pokemon));
  });
};

/**
 * Obtiene una lista de pokemons a mostrar
 * @param {string} endPoint
 * @param {function} action
 */
const getDiscoverPokemon = (endPoint, action) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log("Error Obtenido la lista de Pokemons para discover", err);
    });
};

/**
 * Dada la data de un pokemon la mapea a un objeto pokemo mas simple
 * @param {objet} data Data de pokemon en formato del API
 */
const createPokemon = (data) => {
  const pokemon = {
    name: data.name,
    img: data.sprites.front_default,
    description:
      "This pokemon has the types: " +
      data.types.reduce((typesText, current) => {
        return (typesText == "" ? "" : typesText + ",") + current.type.name;
      }, ""),
  };
  return pokemon;
};

/**
 * Muestra los una lista de cartas en la sección discover
 * obtine los elementos a mostra desde data.discover
 */
const showDiscover = async () => {
  let pokemons = [];
  for (const pokemonMetaData of data.discover.results) {
    const response = await fetch(pokemonMetaData.url);
    const data = await response.json();
    let pokemon = createPokemon(data);
    pokemons.push(pokemon);
  }
  let dest = document.querySelector(".discover-result");
  showListAsCard(pokemons, dest);
};

/**
 * Alamacena el resultado de busque de pokemon
 * @param {object} discover
 */
const saveDiscoverData = (discover) => {
  data.discover = discover;
  showDiscover();
};

/**
 * Muesta la siguiente pagina de pokemons
 */
const nextDiscoverListener = () => {
  document.querySelector(".discover-next").addEventListener("click", (e) => {
    e.preventDefault();
    getDiscoverPokemon(data.discover.next, saveDiscoverData);
  });
};

/**
 * Muestra la pagina anterior de pokemons
 */
const previousDiscoverListener = () => {
  document
    .querySelector(".discover-previous")
    .addEventListener("click", (e) => {
      e.preventDefault();
      getDiscoverPokemon(data.discover.previous, saveDiscoverData);
    });
};

const listToggle = (target, list, after) => {
  const pokemonToAddORemove = JSON.parse(target.dataset.pokemon);
  const index = list.findIndex(
    (pokemon) => pokemon.name == pokemonToAddORemove.name
  );
  if (index >= 0) {
    // Esta en lista
    list.splice(index, 1); // Quitamos
  } else {
    list.push(pokemonToAddORemove);
  }
  saveData();
  if (after) after(pokemonToAddORemove);
};

const favListener = () => {
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (
      target.classList.contains("fav-pokemon") ||
      target.parentElement.classList.contains("fav-pokemon")
    ) {
      target = target.dataset.pokemon ? target : target.parentElement;
      listToggle(target, data.favs, (pokemon) => {
        document
          .querySelectorAll(".fav-pokemon." + pokemon.name)
          .forEach((favs) => {
            const i = favs.querySelector("i");
            i.classList.toggle("text-danger");
            i.classList.toggle("text-secondary");
          });
        showListAsCard(data.favs, document.querySelector(".favs-result"));
      });
    }
  });
};

const teamListener = () => {
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (
      target.classList.contains("team-pokemon") ||
      target.parentElement.classList.contains("team-pokemon")
    ) {
      target = target.dataset.pokemon ? target : target.parentElement;
      listToggle(target, data.team, (pokemon) => {
        document
          .querySelectorAll(".team-pokemon." + pokemon.name)
          .forEach((favs) => {
            const i = favs.querySelector("i");
            i.classList.toggle("text-primary");
            i.classList.toggle("text-secondary");
          });
        showListAsCard(data.team, document.querySelector(".team-result"));
      });
    }
  });
};

const searchListener = () => {
  let searchPanel =  document.querySelector("#search");
  document.forms.search.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.forms.search.querySelector("input");
    fetch(basePokeApi + "pokemon/" +input.value)
      .then((response) => response.json())
      .then((sourcePokemon) => {
        searchPanel.classList.remove("d-none");
        let pokemon =  createPokemon(sourcePokemon)
        if (searchResult.findIndex(p => p.name == pokemon.name) < 0) {
          searchResult.push(pokemon);
        }
        showListAsCard(searchResult, document.querySelector(".search-result"))
      })
      .catch((err) => {
        console.log("no se obtuvo pokemon",err);
      });
  });

  searchPanel.querySelector(".close-search").addEventListener('click', e => {
    searchPanel.classList.add("d-none");
    searchResult = [];
  });
};

/**
 * Agrega todos los listens necesarios
 */
const addListeners = () => {
  nextDiscoverListener();
  previousDiscoverListener();
  favListener();
  teamListener();
  searchListener();
};
/**
 * Configura todo lo necesario para que el App funcione
 */
const App = () => {
  console.log("Start App");
  addListeners();
  data = JSON.parse(localStorage.getItem("data")) || {
    limit: 4,
    favs: [],
    team: [],
  };
  (data.offset = Math.floor(Math.random() * 1050) + 1),
    showListAsCard(data.team, document.querySelector(".team-result"));
  showListAsCard(data.favs, document.querySelector(".favs-result"));
  const endPoint =
    basePokeApi + `pokemon?limit=${data.limit}=4&offset=${data.offset}`;
  getDiscoverPokemon(endPoint, saveDiscoverData);
};

window.onload = App;
