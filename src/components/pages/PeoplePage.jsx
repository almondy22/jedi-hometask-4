import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Table from ".././common/Table";
import { getPeople, peopleColumns } from '../../services/peopleService'

function PeoplePage({people, setPeople}) {  
  useEffect(() => {
    const getData = async () => {      
      const data = await getPeople();
      setPeople(data)
      localStorage.setItem("peopleData", JSON.stringify(data))
    }

    if (!localStorage.peopleData) {
      getData()
    } else {
      const data = localStorage.getItem("peopleData")
      setPeople(JSON.parse(data))
    }    
  }, [setPeople]);

  const handleDeleteItem = (itemId) => {
    const data = [...people];
    data.splice(itemId, 1);
    setPeople(data);
    localStorage.setItem("peopleData", JSON.stringify(data))
  };

  return (
      <main>
          <h1 className="main-header">People Page</h1>
          <Link to="/people/new" className="btn btn-warning mb-4">
              New person
          </Link>
          <Table
              data={people}
              columns={peopleColumns}
              tableDescriptor="People"
              onDeleteItem={handleDeleteItem}
              page="people"
          />
      </main>
  );
}

export default PeoplePage;
