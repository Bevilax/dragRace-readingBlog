export async function getFolkById(id) {
	const response = await fetch(
		"https://swapi.dev/api/people/"+id
	);
	const payload = await response.json();
	return payload;
}

export async function getFolk() {
	const response = await fetch(
		"https://swapi.dev/api/people/"
	);
	const payload = await response.json();
	return payload.results;
}

export async function getPlanetById (id) {
	const response = await fetch ("https://swapi.dev/api/planets/"+id);
	const payload = await response.json();
	return payload;
}

export async function getPlanet() {
	const response = await fetch (
		"https://swapi.dev/api/planets/"
	);
	const payload = await response.json();
	return payload.results;
}