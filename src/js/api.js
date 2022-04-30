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