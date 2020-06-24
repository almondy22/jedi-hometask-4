import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Table from ".././common/Table";
import {getPeople} from '../../services/peopleService';
import {changeBelovedStatus, deletePerson, setPeople} from '../../store/actions/people'
import {getAllPeople} from '../../store/selectors/people'


function PeoplePage() {
    const dispatch = useDispatch();
    const people = useSelector(state => getAllPeople(state));
    useEffect(() => {
        const getData = async () => {
            const data = await getPeople();
            dispatch(setPeople(data))
        }
        if (!localStorage.peopleData) {
            getData()
        } else {
            const data = localStorage.getItem("peopleData")
            dispatch(setPeople(JSON.parse(data)))
        }
    }, [dispatch]);

    const handleDeleteItem = (itemId) => {
        dispatch(deletePerson(itemId))
    };

    const handleBelovedStatus = (itemId) => {
        dispatch(changeBelovedStatus(itemId))
    }

    const getColumns = () => {
        if (!people.length) return [];

        return Object.keys(people[0]).map(colName => {
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
                        return <Link className="badge badge-dark" to={`/people/${id}`}>{name}</Link>
                    }
                }
            }
            return {colName}
        })
    }

    return (
        <main>
            <h1 className="main-header">People Page</h1>
            <Link to="/people/new" className="btn btn-warning mb-4">
                New person
            </Link>
            <Table
                data={people}
                columns={getColumns()}
                tableDescriptor="People"
                onDeleteItem={handleDeleteItem}
                page="people"
            />
        </main>
    );
}

export default PeoplePage;
