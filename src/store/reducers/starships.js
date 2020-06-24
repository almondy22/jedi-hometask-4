import {nanoid} from 'nanoid'
import {SET_STARSHIPS, DELETE_STARSHIP, CHANGE_BELOVED_STATUS, ADD_STARSHIP} from '../actions/starships'

const initialState = {
    allStarships: []
}

function starships(state = initialState, action) {
    switch (action.type) {
        case SET_STARSHIPS:
            return {
                ...state,
                allStarships: action.starships
            }
        case DELETE_STARSHIP:
            return {
                ...state,
                allStarships: state.allStarships.filter(starship => (starship.id !== action.id))
            }
        case CHANGE_BELOVED_STATUS:
            return {
                ...state,
                allStarships: state.allStarships.map((starship) => {
                    return starship.id === action.id ? {...starship, beloved: !starship.beloved} : starship
                })
            }
        case ADD_STARSHIP:
            return {
                ...state,
                allStarships: action.edit ?
                    (
                        state.allStarships.map((starship) => {
                            return starship.id === action.id ? {...action.starship, beloved: starship.beloved, id: starship.id} : starship
                        })
                    ) : (
                        action.starship.beloved = false,
                            action.starship.id = nanoid(5),
                            [...state.allStarships, action.starship]
                    )
            }
        default:
            return state;
    }
}

export default starships