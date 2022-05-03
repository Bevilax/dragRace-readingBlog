export async function getFolkById(id) {
	const response = await fetch(
		"https://www.swapi.tech/api/people/"+id
	);
	const payload = await response.json();
	return payload.result.properties;
}

export async function getFolk() {
	const response = await fetch(
		"https://www.swapi.tech/api/people/"
	);
	const payload = await response.json();
	return payload.results;
}

export async function getPlanetById (id) {
	const response = await fetch ("https://www.swapi.tech/api/planets/"+id);
	const payload = await response.json();
	return payload.result.properties;
}

export async function getPlanet() {
	const response = await fetch (
		"https://www.swapi.tech/api/planets/"
	);
	const payload = await response.json();
	return payload.results;
}