const url = "https://swapi.dev/api"

export const planetsColumns = [
    "Name",
    "Diameter",
    "Population",
    "Climate",
    "Created",
]

export const getPlanets = async () => {
    const planetsResponse = await(await fetch(`${url}/planets`)).json();
    return planetsResponse.results.map(({name, diameter, population, climate, created}) => ({
        name, diameter, population, climate, created
    }));
}