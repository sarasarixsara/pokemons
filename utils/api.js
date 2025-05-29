const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchAllPokes(limit = 500) {
    try {
        const firstRes = await fetch(`${BASE_URL}?offset=0&limit=${limit}`)
        const firstData = await firstRes.json()
        const total = firstData.count

        const numPages = Math.ceil(total / limit)
        const urls = []
        for (let i = 1; i < numPages; i++) {
            const offset = i * limit
            urls.push(`${BASE_URL}?offset=${offset}&limit=${limit}`)
        }
        const responses = await Promise.all(urls.map(url => fetch(url)))
        let results = await Promise.all(responses.map(response => response.json()))
        return results.map(result => result.results).flat().concat(firstData.results)

    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getPokemonDetails(pokemonName) {
    try {
        const response = await fetch(`${BASE_URL}/${pokemonName}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}