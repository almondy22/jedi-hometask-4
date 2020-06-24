import {nanoid} from 'nanoid'
import {SET_PLANETS, DELETE_PLANET, CHANGE_BELOVED_STATUS, ADD_PLANET} from '../actions/planets'

const initialState = {
    allPlanets: []
}

function planets(state = initialState, action) {
    switch (action.type) {
        case SET_PLANETS:
            return {
                ...state,
                allPlanets: action.planets
            }
        case DELETE_PLANET:
            return {
                ...state,
                allPlanets: state.allPlanets.filter(planet => (planet.id !== action.id))
            }
        case CHANGE_BELOVED_STATUS:
            return {
                ...state,
                allPlanets: state.allPlanets.map((planet) => {
                    return planet.id === action.id ? {...planet, beloved: !planet.beloved} : planet
                })
            }
        case ADD_PLANET:
            return {
                ...state,
                allPlanets: action.edit ?
                    (
                        state.allPlanets.map((planet) => {
                            return planet.id === action.id ? {...action.planet, beloved: planet.beloved, id: planet.id} : planet
                        })
                    ) : (
                        action.planet.beloved = false,
                        action.planet.id = nanoid(5),
                        [...state.allPlanets, action.planet]
                    )
            }
        default:
            return state;
    }
}

export default planets