import {nanoid} from 'nanoid'
const url = "https://swapi.dev/api"

export const starshipsColumns = [
    "name",
    "model",
    "starship_class",
    "length",
    "passengers",
]

export const getStarships = async () => {
    const starshipsResponse = await(await fetch(`${url}/starships`)).json();
    return starshipsResponse.results.map(({name, model, starship_class, length, passengers}) => ({
        name,
        model,
        starship_class,
        length,
        passengers,
        beloved: false,
        id: nanoid(5)
    }));
}