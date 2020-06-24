import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Validate from "validate.js";
import peopleSchema from "../../services/validationSchemas/peopleSchema";
import planetsSchema from "../../services/validationSchemas/planetsSchema";
import starshipsSchema from "../../services/validationSchemas/starshipsSchema";
import Input from "./Input";

const Form = ({ columns, initialData, onAddData, page }) => {
    const [personData, setPersonData] = useState(initialData);
    const [edit, setEdit] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData.name !== "") setEdit(true);
    }, [initialData]);

    const handleClick = async (event) => {
        let schema;
        switch (page) {
            case "people":
                schema = peopleSchema;
                break;
            case "planets":
                schema = planetsSchema;
                break;
            case "starships":
                schema = starshipsSchema;
                break;
            default:
                break;
        }
        const error = Validate(personData, schema);
        if (error) {
            event.preventDefault();
            setErrors(error);
            return;
        }
        onAddData(personData, edit);
    };
    const handleChange = (event) => {
        const { currentTarget: input } = event;
        const data = { ...personData };
        const formErrors = { ...errors };
        if (formErrors[input.name]) {
            delete formErrors[input.name];
        }
        data[input.name] = input.value;
        setPersonData(data);
        setErrors(formErrors);
    };
    return (
        <form action="#">
            {columns.map((columnName) => (
                <Input
                    key={columnName}
                    name={columnName.toLowerCase()}
                    label={columnName}
                    value={personData[columnName.toLowerCase()]}
                    type="input"
                    required
                    onChange={(event) => handleChange(event)}
                    error={errors[columnName.toLowerCase()]}
                />
            ))}
            <Link
                to={`/${page}`}
                className="btn btn-warning"
                onClick={(event) => handleClick(event)}
            >
                Save
            </Link>
        </form>
    );
};

export default Form;
