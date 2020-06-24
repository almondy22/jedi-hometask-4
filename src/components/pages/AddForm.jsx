import React from "react";
import Form from "../common/Form";

import {peopleColumns} from "../../services/peopleService";
import {planetsColumns} from "../../services/planetsService";
import {starshipsColumns} from "../../services/starshipsService";
import {useDispatch, useSelector} from "react-redux";
import {getAllPeople} from "../../store/selectors/people";
import {addPerson} from "../../store/actions/people";
import {getAllPlanets} from "../../store/selectors/planets";
import {addPlanet} from "../../store/actions/planets";
import {getAllStarships} from "../../store/selectors/starships";
import {addStarship} from "../../store/actions/starships";

function AddForm({page, match}) {
    const dispatch = useDispatch()
    const people = useSelector(state => getAllPeople(state));
    const planets = useSelector(state => getAllPlanets(state));
    const starships = useSelector(state => getAllStarships(state));

    const editItem = () => {
        switch (page) {
            case "people":
                return match.params.id === "new" ? null : people.find(person => person.id === match.params.id);
            case "planets":
                return match.params.id === "new" ? null : planets.find(planet => planet.id === match.params.id);
            case "starships":
                return match.params.id === "new" ? null : starships.find(starship => starship.id === match.params.id);
            default:
                return
        }
    }

    const getInitialData = (columns) => {
        const data = editItem();
        if (data) {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = data[columnName];
                return cols;
            }, {});
        } else {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = "";
                return cols;
            }, {});
        }
    };

    const detectPage = () => {
        switch (page) {
            case "people":
                return {
                    cols: peopleColumns,
                    initial: getInitialData(peopleColumns),
                };
            case "planets":
                return {
                    cols: planetsColumns,
                    initial: getInitialData(planetsColumns),
                };
            case "starships":
                return {
                    cols: starshipsColumns,
                    initial: getInitialData(starshipsColumns),
                };

            default:
                break;
        }
    };

    const handleAdd = (item, edit) => {
        switch (page) {
            case "people":
                dispatch(addPerson(item, edit, match.params.id));
                break;
            case "planets":
                dispatch(addPlanet(item, edit, match.params.id));
                break
            case "starships":
                dispatch(addStarship(item, edit, match.params.id))
                break;
            default:
                break;
        }


    };

    return (
        <div>
            <Form
                columns={detectPage().cols}
                initialData={detectPage().initial}
                onAddData={handleAdd}
                page={page}
            />
        </div>
    );
}

export default AddForm;
