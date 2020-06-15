import React, { useState } from "react";
import Table from ".././common/Table";
import Form from ".././common/Form";

let data = [
  {
    Name: "Anaxes",
    Appearance: "Star Wars: The Clone Wars",
    Year: "2020",
    ID: "1",
  },
  { Name: "Akiva", Appearance: "Star Wars: Aftermath", Year: "2015", ID: "2" },
  { Name: "Cantonica", Appearance: "The Last Jedi", Year: "2017", ID: "3" },
];

const columns = Object.keys(data[0]);

function PlanetsPage() {
  const [planets, setPlanets] = useState(data);

  const handleAddItem = (itemData) => {
    data = [...planets, itemData];
    setPlanets(data);
  };

  const handleDeleteItem = (itemId) => {
    data = [...planets];
    data.splice(itemId, 1);
    setPlanets(data);
  };

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  return (
    <main>
      <h1 className="main-header">Planets Page</h1>
      {data.length === 0 ? (
        <>
          <h1 className="main-header mt-3 mb-3">
            There is no information on this page!
          </h1>
        </>
      ) : (
        <>
          <Table
            data={planets}
            columns={columns}
            tableDescriptor="Planet"
            onDeleteItem={handleDeleteItem}
          />
        </>
      )}
      <Form
        columns={columns}
        initialData={getInitialData()}
        onAddData={handleAddItem}
      />
    </main>
  );
}

export default PlanetsPage;
