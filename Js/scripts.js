let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

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
		loadDetails(pokemon).then(function () {
			let modal = document.getElementById('pokemon-modal');
			let modalTitle = modal.querySelector('.modal-title');
			let modalImage = modal.querySelector('.modal-image');
			let modalHeight = modal.querySelector('.modal-height');
			let modalWeight = modal.querySelector('.modal-weight'); // New selector for weight
			let modalTypes = modal.querySelector('.modal-types');

			// Set modal content with Pokémon details
			modalTitle.innerText = pokemon.name;
			modalImage.src = pokemon.imageUrl;
			modalHeight.innerText = `Height: ${pokemon.height} ft`;
			modalWeight.innerText = `Weight: ${pokemon.weight} lb`;
			modalTypes.innerText = `Type(s): ${pokemon.types.join(', ')}`;

			// Show the modal
			modal.style.display = 'block';

			// Close modal when close button is clicked
			let closeButton = modal.querySelector('.close-button');
			closeButton.onclick = function () {
				modal.style.display = 'none';
			};

			// Close modal when clicking outside of the modal content
			window.onclick = function (event) {
				if (event.target === modal) {
					modal.style.display = 'none';
				}
			};
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
