export const saveState = (state) => {
    try {
        if (state.people.allPeople.length) {
            const serializedState = JSON.stringify(state.people.allPeople);
            localStorage.setItem('peopleData', serializedState);
        }
        if (state.planets.allPlanets.length) {
            const serializedState = JSON.stringify(state.planets.allPlanets);
            localStorage.setItem('planetsData', serializedState);
        }
        if (state.starships.allStarships.length) {
            const serializedState = JSON.stringify(state.starships.allStarships);
            localStorage.setItem('starshipsData', serializedState);
        }

    } catch(err) {
        console.error(err)
        return undefined;
    }
};