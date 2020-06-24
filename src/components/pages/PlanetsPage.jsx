import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import Table from ".././common/Table";
import {getPlanets} from '../../services/planetsService'
import {useDispatch, useSelector} from "react-redux";
import {getAllPlanets} from "../../store/selectors/planets";
import {deletePlanet, changeBelovedStatus, setPlanets} from "../../store/actions/planets";

function PlanetsPage() {
    const dispatch = useDispatch();
    const planets = useSelector(state => getAllPlanets(state));
    useEffect(() => {
        const getData = async () => {
            const data = await getPlanets()
            dispatch(setPlanets(data))
        }
        if (!localStorage.planetsData) {
            getData()
        } else {
            const data = localStorage.getItem("planetsData")
            dispatch(setPlanets(JSON.parse(data)))
        }
    }, [dispatch]);

    const handleDeleteItem = (itemId) => {
        dispatch(deletePlanet(itemId))
    };
    const handleBelovedStatus = (itemId) => {
        dispatch(changeBelovedStatus(itemId))
    }

    const getColumns = () => {
        if (!planets.length) return [];

        return Object.keys(planets[0]).map(colName => {
            if (colName === 'beloved') {
                return {
                    colName,
                    content: ({beloved, id}) => (
                        <input
                            type="checkbox"
                            checked={beloved}
                            onChange={() => handleBelovedStatus(id)}
                        />
                    )
                }
            }
            if (colName === 'name') {
                return {
                    colName,
                    content: ({name, id}) => {
                        return <Link className="badge badge-dark" to={`/planets/${id}`}>{name}</Link>
                    }
                }
            }
            return {colName}
        })
    }


    return (
        <main>
            <h1 className="main-header">Planets Page</h1>
            <Link to="/planets/new" className="btn btn-warning mb-4">
                New planet
            </Link>
            <Table
                data={planets}
                columns={getColumns()}
                tableDescriptor="Planet"
                onDeleteItem={handleDeleteItem}
                page="planets"
            />
        </main>
    );
}

export default PlanetsPage;
