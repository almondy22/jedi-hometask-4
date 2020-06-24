import {nanoid} from 'nanoid'
import {SET_PEOPLE, DELETE_PERSON, CHANGE_BELOVED_STATUS, ADD_PERSON} from '../actions/people'

const initialState = {
    allPeople: []
}

function people(state = initialState, action) {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                allPeople: action.people
            }
        case DELETE_PERSON:
            return {
                ...state,
                allPeople: state.allPeople.filter(person => (person.id !== action.id))
            }
        case CHANGE_BELOVED_STATUS:
            return {
                ...state,
                allPeople: state.allPeople.map((person) => {
                    return person.id === action.id ? {...person, beloved: !person.beloved} : person
                })
            }
        case ADD_PERSON:
            return {
                ...state,
                allPeople: action.edit ?
                    (
                        state.allPeople.map((person) => {
                            return person.id === action.id ? {...action.person, beloved: person.beloved, id: person.id} : person
                        })
                    ) : (
                        action.person.beloved = false,
                        action.person.id = nanoid(5),
                        [...state.allPeople, action.person]
                    )

            }
        default:
            return state;
    }
}

export default people