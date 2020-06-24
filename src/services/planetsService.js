import {nanoid} from "nanoid";

const url = "https://swapi.dev/api"

export const planetsColumns = [
    "name",
    "diameter",
    "population",
    "climate",
    "created",
]

export const getPlanets = async () => {
    const planetsResponse = await(await fetch(`${url}/planets`)).json();
    return planetsResponse.results.map(({name, diameter, population, climate, created}) => ({
        name,
        diameter,
        population,
        climate,
        created,
        beloved: false,
        id: nanoid(5)
    }));
}