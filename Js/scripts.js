let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function loadList() {
		return fetch(apiUrl)
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				json.results.forEach(function (item) {
					let pokemon = {
						name: item.name,
						detailsUrl: item.url,
					};
					add(pokemon);
				});
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	function loadDetails(pokemon) {
		let url = pokemon.detailsUrl;
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (details) {
				// Add the details to the pokemon object
				pokemon.imageUrl = details.sprites.front_default;
				pokemon.height = details.height;
				pokemon.weight = details.weight;
				pokemon.types = details.types.map((type) => type.type.name);
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	function showDetails(pokemon) {
		// Load the details for the selected Pokémon
		loadDetails(pokemon).then(function () {
			console.log(`Name: ${pokemon.name}`);
			console.log(`Height: ${pokemon.height} ft`);
			console.log(`Weight: ${pokemon.weight} lb`);
			console.log(`Type(s): ${pokemon.types.join(', ')}`);
			if (pokemon.height > 8) {
				console.log("Wow, that's big!");
			}
		});
	}

	function addListItem(pokemon) {
		let pokemonListElement = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button-class');
		button.addEventListener('click', function () {
			showDetails(pokemon);
		});
		listItem.appendChild(button);
		pokemonListElement.appendChild(listItem);
	}

	// Return the public API of the pokemonRepository
	return {
		add: add,
		getAll: getAll,
		loadList: loadList,
		loadDetails: loadDetails,
		addListItem: addListItem,
		showDetails: showDetails,
	};
})();

// Load the list of Pokémon and display them
pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
