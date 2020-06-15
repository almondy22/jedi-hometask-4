import React, { useState } from "react";
import Table from ".././common/Table";
import Form from ".././common/Form";

let data = [
  { First: "Mark", Last: "Otto", Handle: "@motto", ID: "1" },
  { First: "Jacob", Last: "Thornton", Handle: "@fat", ID: "2" },
  { First: "Larry", Last: "the Bird", Handle: "@twitter", ID: "3" },
];

const columns = Object.keys(data[0]);

function PeoplePage() {
  const [people, setPeople] = useState(data);

  const handleAddItem = (itemData) => {
    data = [...people, itemData];
    setPeople(data);
  };

  const handleDeleteItem = (itemId) => {
    data = [...people];
    data.splice(itemId, 1);
    setPeople(data);
  };

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  return (
    <main>
      <h1 className="main-header">People Page</h1>
      {data.length === 0 ? (
        <>
          <h1 className="main-header mt-3 mb-3">
            There is no information on this page!
          </h1>
        </>
      ) : (
        <>
          <Table
            data={people}
            columns={columns}
            tableDescriptor="People"
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

export default PeoplePage;
