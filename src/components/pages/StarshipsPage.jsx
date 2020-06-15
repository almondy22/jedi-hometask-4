import React, {useState} from 'react';
import Table from ".././common/Table";
import Form from ".././common/Form";

let data = [
    { Name: "AAT BATTLE TANK", Appearance: "Star Wars: Revenge of the Sith", Length: "9.19m", ID: "1" },
    { Name: "A-WING FIGHTER", Appearance: "Star Wars: Return of the Jedi", Length: "9.6m", ID: "2" },
    { Name: "ARC-170 STARFIGHTER", Appearance: "Star Wars: The Clone Wars", Length: "12.71m", ID: "3" },
];

const columns = Object.keys(data[0]);

function StarshipsPage() {
  const [starships, setStarships] = useState(data);

  const handleAddItem = (itemData) => {
    data = [...starships, itemData];
    setStarships(data);
  };

  const handleDeleteItem = (itemId) => {
    data = [...starships];
    data.splice(itemId, 1);
    setStarships(data);
  }

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  return (
    <main>
      <h1 className="main-header">Starships Page</h1>
      {data.length === 0 ? (
        <>
          <h1 className="main-header mt-3 mb-3">
            There is no information on this page!
          </h1>
        </>
      ) : (
        <>
          <Table
            data={starships}
            columns={columns}
            tableDescriptor="Starship"
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

export default StarshipsPage;
