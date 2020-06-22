const url = "https://swapi.dev/api"

export const starshipsColumns = [
    "Name",
    "Model",
    "Starship_class",
    "Length",
    "Passengers",
]

export const getStarships = async () => {
    const starshipsResponse = await(await fetch(`${url}/starships`)).json();
    return starshipsResponse.results.map(({name, model, starship_class, length, passengers}) => ({
        name, model, starship_class, length, passengers
    }));
}