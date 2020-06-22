import React from "react";
import Form from "../common/Form";

import { peopleColumns } from "../../services/peopleService";
import { planetsColumns } from "../../services/planetsService";
import { starshipsColumns } from "../../services/starshipsService";

function AddForm({ page, match, addHandler, data }) {
    const editItem = () => match.params.id === "new" ? null : data[+match.params.id - 1];
    const handleAdd = (item, edit) => {
        addHandler(item, page, edit, match.params.id - 1);
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
    const getInitialData = (columns) => {
        const data = editItem();
        if (data) {
            return columns.reduce((cols, columnName) => {
                cols[columnName.toLowerCase()] = data[columnName.toLowerCase()];
                return cols;
            }, {});
        } else {
            return columns.reduce((cols, columnName) => {
                cols[columnName.toLowerCase()] = "";
                return cols;
            }, {});
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
