import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Table from ".././common/Table";
import { getPlanets, planetsColumns } from '../../services/planetsService'

function PlanetsPage({planets, setPlanets}) {
  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets()
      setPlanets(data)
      localStorage.setItem("planetsData", JSON.stringify(data))
    }
    if (!localStorage.planetsData) {
      getData()
    } else {
      const data = localStorage.getItem("planetsData")
      setPlanets(JSON.parse(data))
    }
  }, [setPlanets]);

  const handleDeleteItem = (itemId) => {
    const data = [...planets];
    data.splice(itemId, 1);
    setPlanets(data);
    localStorage.setItem("planetsData", JSON.stringify(data))
  };

  return (
      <main>
          <h1 className="main-header">Planets Page</h1>
          <Link to="/planets/new" className="btn btn-warning mb-4">
              New planet
          </Link>
          <Table
              data={planets}
              columns={planetsColumns}
              tableDescriptor="Planet"
              onDeleteItem={handleDeleteItem}
              page="planets"
          />
      </main>
  );
}

export default PlanetsPage;
