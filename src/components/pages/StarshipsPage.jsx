import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from ".././common/Table";
import {getStarships} from '../../services/starshipsService'
import {useDispatch, useSelector} from "react-redux";
import {getAllStarships} from "../../store/selectors/starships";
import {deleteStarship, setStarships, changeBelovedStatus} from "../../store/actions/starships";

function StarshipsPage() {
    const dispatch = useDispatch();
    const starships = useSelector(state => getAllStarships(state));
    useEffect(() => {
        const getData = async () => {
            const data = await getStarships()
            dispatch(setStarships(data))
        }
        if (!localStorage.starshipsData) {
            getData()
        } else {
            const data = localStorage.getItem("starshipsData")
            dispatch(setStarships(JSON.parse(data)))
        }
    }, [dispatch]);

    const handleDeleteItem = (itemId) => {
        dispatch(deleteStarship(itemId))
    }

    const handleBelovedStatus = (itemId) => {
        dispatch(changeBelovedStatus(itemId))
    }

    const getColumns = () => {
        if (!starships.length) return [];

        return Object.keys(starships[0]).map(colName => {
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
                        return <Link className="badge badge-dark" to={`/starships/${id}`}>{name}</Link>
                    }
                }
            }
            return {colName}
        })
    }

    return (
        <main>
            <h1 className="main-header">Starships Page</h1>
            <Link to="/starships/new" className="btn btn-warning mb-4">
                New starship
            </Link>
            <Table
                data={starships}
                columns={getColumns()}
                tableDescriptor="Starship"
                onDeleteItem={handleDeleteItem}
                page="starships"
            />
        </main>
    );
}

export default StarshipsPage;
