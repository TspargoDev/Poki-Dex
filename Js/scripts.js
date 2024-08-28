let pokemonRepository = (function () {
	let pokemonList = [
		['Bulbasaur', { height: 0.7, weight: 6.9, type: ['Grass', 'Poison'] }],
		['Ivysaur', { height: 1.0, weight: 13.0, type: ['Grass', 'Poison'] }],
		['Venusaur', { height: 2.0, weight: 100.0, type: ['Grass', 'Poison'] }],
		['Charmander', { height: 0.6, weight: 8.5, type: ['Fire'] }],
		['Charmeleon', { height: 1.1, weight: 19.0, type: ['Fire'] }],
		['Charizard', { height: 1.7, weight: 90.5, type: ['Fire', 'Flying'] }],
		['Squirtle', { height: 0.5, weight: 9.0, type: ['Water'] }],
		['Wartortle', { height: 1.0, weight: 22.5, type: ['Water'] }],
		['Blastoise', { height: 1.6, weight: 85.5, type: ['Water'] }],
		['Caterpie', { height: 0.3, weight: 2.9, type: ['Bug'] }],
		['Metapod', { height: 0.7, weight: 9.9, type: ['Bug'] }],
		['Butterfree', { height: 1.1, weight: 32.0, type: ['Bug', 'Flying'] }],
		['Weedle', { height: 0.3, weight: 3.2, type: ['Bug', 'Poison'] }],
		['Kakuna', { height: 0.6, weight: 10.0, type: ['Bug', 'Poison'] }],
		['Beedrill', { height: 1.0, weight: 29.5, type: ['Bug', 'Poison'] }],
		['Pidgey', { height: 0.3, weight: 1.8, type: ['Normal', 'Flying'] }],
		['Pidgeotto', { height: 1.1, weight: 30.0, type: ['Normal', 'Flying'] }],
		['Pidgeot', { height: 1.5, weight: 39.5, type: ['Normal', 'Flying'] }],
		['Rattata', { height: 0.3, weight: 3.5, type: ['Normal'] }],
		['Raticate', { height: 0.7, weight: 18.5, type: ['Normal'] }],
		['Spearow', { height: 0.3, weight: 2.0, type: ['Normal', 'Flying'] }],
		['Fearow', { height: 1.2, weight: 38.0, type: ['Normal', 'Flying'] }],
		['Ekans', { height: 2.0, weight: 6.9, type: ['Poison'] }],
		['Arbok', { height: 3.5, weight: 65.0, type: ['Poison'] }],
		['Pikachu', { height: 0.4, weight: 6.0, type: ['Electric'] }],
		['Raichu', { height: 0.8, weight: 30.0, type: ['Electric'] }],
		['Sandshrew', { height: 0.6, weight: 12.0, type: ['Ground'] }],
		['Sandslash', { height: 1.0, weight: 29.5, type: ['Ground'] }],
		['Nidoran♀', { height: 0.4, weight: 7.0, type: ['Poison'] }],
		['Nidorina', { height: 0.8, weight: 20.0, type: ['Poison'] }],
		['Nidoqueen', { height: 1.3, weight: 60.0, type: ['Poison', 'Ground'] }],
		['Nidoran♂', { height: 0.5, weight: 9.0, type: ['Poison'] }],
		['Nidorino', { height: 0.9, weight: 19.5, type: ['Poison'] }],
		['Nidoking', { height: 1.4, weight: 62.0, type: ['Poison', 'Ground'] }],
		['Clefairy', { height: 0.6, weight: 7.5, type: ['Fairy'] }],
		['Clefable', { height: 1.3, weight: 40.0, type: ['Fairy'] }],
		['Vulpix', { height: 0.6, weight: 9.9, type: ['Fire'] }],
		['Ninetales', { height: 1.1, weight: 19.9, type: ['Fire'] }],
		['Jigglypuff', { height: 0.5, weight: 5.5, type: ['Normal', 'Fairy'] }],
		['Wigglytuff', { height: 1.0, weight: 12.0, type: ['Normal', 'Fairy'] }],
		['Zubat', { height: 0.8, weight: 7.5, type: ['Poison', 'Flying'] }],
		['Golbat', { height: 1.6, weight: 55.0, type: ['Poison', 'Flying'] }],
		['Oddish', { height: 0.5, weight: 5.4, type: ['Grass', 'Poison'] }],
		['Gloom', { height: 0.8, weight: 8.6, type: ['Grass', 'Poison'] }],
		['Vileplume', { height: 1.2, weight: 18.6, type: ['Grass', 'Poison'] }],
		['Paras', { height: 0.3, weight: 5.4, type: ['Bug', 'Grass'] }],
		['Parasect', { height: 1.0, weight: 29.5, type: ['Bug', 'Grass'] }],
		['Venonat', { height: 1.0, weight: 30.0, type: ['Bug', 'Poison'] }],
		['Venomoth', { height: 1.5, weight: 12.5, type: ['Bug', 'Poison'] }],
		['Diglett', { height: 0.2, weight: 0.8, type: ['Ground'] }],
		['Dugtrio', { height: 0.7, weight: 33.3, type: ['Ground'] }],
		['Meowth', { height: 0.4, weight: 4.2, type: ['Normal'] }],
		['Persian', { height: 1.0, weight: 32.0, type: ['Normal'] }],
		['Psyduck', { height: 0.8, weight: 19.6, type: ['Water'] }],
		['Golduck', { height: 1.7, weight: 76.6, type: ['Water'] }],
		['Mankey', { height: 0.5, weight: 28.0, type: ['Fighting'] }],
		['Primeape', { height: 1.0, weight: 32.0, type: ['Fighting'] }],
		['Growlithe', { height: 0.7, weight: 19.0, type: ['Fire'] }],
		['Arcanine', { height: 1.9, weight: 155.0, type: ['Fire'] }],
		['Poliwag', { height: 0.6, weight: 12.4, type: ['Water'] }],
		['Poliwhirl', { height: 1.0, weight: 20.0, type: ['Water'] }],
		['Poliwrath', { height: 1.3, weight: 54.0, type: ['Water', 'Fighting'] }],
		['Abra', { height: 0.9, weight: 19.5, type: ['Psychic'] }],
		['Kadabra', { height: 1.3, weight: 56.5, type: ['Psychic'] }],
		['Alakazam', { height: 1.5, weight: 48.0, type: ['Psychic'] }],
		['Machop', { height: 0.8, weight: 19.5, type: ['Fighting'] }],
		['Machoke', { height: 1.5, weight: 70.5, type: ['Fighting'] }],
		['Machamp', { height: 1.6, weight: 130.0, type: ['Fighting'] }],
		['Bellsprout', { height: 0.7, weight: 4.0, type: ['Grass', 'Poison'] }],
		['Weepinbell', { height: 1.0, weight: 6.4, type: ['Grass', 'Poison'] }],
		['Victreebel', { height: 1.7, weight: 15.5, type: ['Grass', 'Poison'] }],
		['Tentacool', { height: 0.9, weight: 45.5, type: ['Water', 'Poison'] }],
		['Tentacruel', { height: 1.6, weight: 55.0, type: ['Water', 'Poison'] }],
		['Geodude', { height: 0.4, weight: 20.0, type: ['Rock', 'Ground'] }],
		['Graveler', { height: 1.0, weight: 105.0, type: ['Rock', 'Ground'] }],
		['Golem', { height: 1.4, weight: 300.0, type: ['Rock', 'Ground'] }],
		['Ponyta', { height: 1.0, weight: 30.0, type: ['Fire'] }],
		['Rapidash', { height: 1.7, weight: 95.0, type: ['Fire'] }],
		['Slowpoke', { height: 1.2, weight: 36.0, type: ['Water', 'Psychic'] }],
		['Slowbro', { height: 1.6, weight: 78.5, type: ['Water', 'Psychic'] }],
		['Magnemite', { height: 0.3, weight: 6.0, type: ['Electric', 'Steel'] }],
		['Magneton', { height: 1.0, weight: 60.0, type: ['Electric', 'Steel'] }],
		["Farfetch'd", { height: 0.8, weight: 15.0, type: ['Normal', 'Flying'] }],
		['Doduo', { height: 1.4, weight: 39.2, type: ['Normal', 'Flying'] }],
		['Dodrio', { height: 1.8, weight: 85.2, type: ['Normal', 'Flying'] }],
		['Seel', { height: 1.1, weight: 90.0, type: ['Water'] }],
		['Dewgong', { height: 1.7, weight: 120.0, type: ['Water', 'Ice'] }],
		['Grimer', { height: 0.9, weight: 30.0, type: ['Poison'] }],
		['Muk', { height: 1.2, weight: 30.0, type: ['Poison'] }],
		['Shellder', { height: 0.3, weight: 4.0, type: ['Water'] }],
		['Cloyster', { height: 1.5, weight: 132.5, type: ['Water', 'Ice'] }],
		['Gastly', { height: 1.3, weight: 0.1, type: ['Ghost', 'Poison'] }],
		['Haunter', { height: 1.6, weight: 0.1, type: ['Ghost', 'Poison'] }],
		['Gengar', { height: 1.5, weight: 40.5, type: ['Ghost', 'Poison'] }],
		['Onix', { height: 8.8, weight: 210.0, type: ['Rock', 'Ground'] }],
		['Drowzee', { height: 1.0, weight: 32.4, type: ['Psychic'] }],
		['Hypno', { height: 1.6, weight: 75.6, type: ['Psychic'] }],
		['Krabby', { height: 0.4, weight: 6.5, type: ['Water'] }],
		['Kingler', { height: 1.3, weight: 60.0, type: ['Water'] }],
		['Voltorb', { height: 0.5, weight: 10.4, type: ['Electric'] }],
		['Electrode', { height: 1.2, weight: 66.6, type: ['Electric'] }],
		['Exeggcute', { height: 0.4, weight: 2.5, type: ['Grass', 'Psychic'] }],
		['Exeggutor', { height: 2.0, weight: 120.0, type: ['Grass', 'Psychic'] }],
		['Cubone', { height: 0.4, weight: 6.5, type: ['Ground'] }],
		['Marowak', { height: 1.0, weight: 45.0, type: ['Ground'] }],
		['Hitmonlee', { height: 1.5, weight: 49.8, type: ['Fighting'] }],
		['Hitmonchan', { height: 1.4, weight: 50.2, type: ['Fighting'] }],
		['Lickitung', { height: 1.2, weight: 65.5, type: ['Normal'] }],
		['Koffing', { height: 0.6, weight: 1.0, type: ['Poison'] }],
		['Weezing', { height: 1.2, weight: 9.5, type: ['Poison'] }],
		['Rhyhorn', { height: 1.0, weight: 115.0, type: ['Ground', 'Rock'] }],
		['Rhydon', { height: 1.9, weight: 120.0, type: ['Ground', 'Rock'] }],
		['Chansey', { height: 1.1, weight: 34.6, type: ['Normal'] }],
		['Tangela', { height: 1.0, weight: 35.0, type: ['Grass'] }],
		['Kangaskhan', { height: 2.2, weight: 80.0, type: ['Normal'] }],
		['Horsea', { height: 0.4, weight: 8.0, type: ['Water'] }],
		['Seadra', { height: 1.2, weight: 25.0, type: ['Water'] }],
		['Goldeen', { height: 0.6, weight: 15.0, type: ['Water'] }],
		['Seaking', { height: 1.3, weight: 39.0, type: ['Water'] }],
		['Staryu', { height: 0.8, weight: 34.5, type: ['Water'] }],
		['Starmie', { height: 1.1, weight: 80.0, type: ['Water', 'Psychic'] }],
		['Mr. Mime', { height: 1.3, weight: 54.5, type: ['Psychic', 'Fairy'] }],
		['Scyther', { height: 1.5, weight: 56.0, type: ['Bug', 'Flying'] }],
		['Jynx', { height: 1.4, weight: 40.6, type: ['Ice', 'Psychic'] }],
		['Electabuzz', { height: 1.1, weight: 30.0, type: ['Electric'] }],
		['Magmar', { height: 1.3, weight: 44.5, type: ['Fire'] }],
		['Pinsir', { height: 1.5, weight: 55.0, type: ['Bug'] }],
		['Tauros', { height: 1.4, weight: 88.4, type: ['Normal'] }],
		['Magikarp', { height: 0.9, weight: 10.0, type: ['Water'] }],
		['Gyarados', { height: 6.5, weight: 235.0, type: ['Water', 'Flying'] }],
		['Lapras', { height: 2.5, weight: 220.0, type: ['Water', 'Ice'] }],
		['Ditto', { height: 0.3, weight: 4.0, type: ['Normal'] }],
		['Eevee', { height: 0.3, weight: 6.5, type: ['Normal'] }],
		['Vaporeon', { height: 1.0, weight: 29.0, type: ['Water'] }],
		['Jolteon', { height: 0.8, weight: 24.5, type: ['Electric'] }],
		['Flareon', { height: 0.9, weight: 25.0, type: ['Fire'] }],
		['Porygon', { height: 0.8, weight: 36.5, type: ['Normal'] }],
		['Omanyte', { height: 0.4, weight: 7.5, type: ['Rock', 'Water'] }],
		['Omastar', { height: 1.0, weight: 35.0, type: ['Rock', 'Water'] }],
		['Kabuto', { height: 0.5, weight: 11.5, type: ['Rock', 'Water'] }],
		['Kabutops', { height: 1.3, weight: 40.5, type: ['Rock', 'Water'] }],
		['Aerodactyl', { height: 1.8, weight: 59.0, type: ['Rock', 'Flying'] }],
		['Snorlax', { height: 2.1, weight: 460.0, type: ['Normal'] }],
		['Articuno', { height: 1.7, weight: 55.4, type: ['Ice', 'Flying'] }],
		['Zapdos', { height: 1.6, weight: 52.6, type: ['Electric', 'Flying'] }],
		['Moltres', { height: 2.0, weight: 60.0, type: ['Fire', 'Flying'] }],
		['Dratini', { height: 1.8, weight: 3.3, type: ['Dragon'] }],
		['Dragonair', { height: 4.0, weight: 16.5, type: ['Dragon'] }],
		['Dragonite', { height: 2.2, weight: 210.0, type: ['Dragon', 'Flying'] }],
		['Mewtwo', { height: 2.0, weight: 122.0, type: ['Psychic'] }],
		['Mew', { height: 0.4, weight: 4.0, type: ['Psychic'] }],
	];
	//pokemonRepository.getAll().forEach(function (pokemon) {
	//let name = pokemon[0];
	//let details = pokemon[1];

	//document.write(`Name: ${name}`);
	//document.write(` Height: ${details.height} meters`);
	//if (details.height > 8) document.write(" - Wow, that's Big!");
	//document.write(` Weight: ${details.weight} kg`);
	//document.write(` Type(s): ${details.type.join(', ')}`);
	//document.write('----------------------');
	//})

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		{
			pokemonList.push(pokemon);
		}
	}

	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listpokemon = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon[0];
		button.classList.add('button-class');
		button.addEventListener('click', function () {
			showDetails(pokemon);
		});
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
	}

	function showDetails(pokemon) {
		let name = pokemon[0];
		let details = pokemon[1];
		console.log(`Name: ${name}`);
		console.log(`Height: ${details.height} meters`);
		console.log(`Weight: ${details.weight} kg`);
		console.log(`Type(s): ${details.type.join(', ')}`);
		if (details.height > 8) {
			console.log("Wow, that's big!");
		}
	}

	//getAll().forEach(function (pokemon) {
	//addListItem(pokemon);
	//});

	return {
		add: add,
		getAll: getAll,
		showDetails: showDetails,
		addListItem: addListItem,
	};
})();
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
