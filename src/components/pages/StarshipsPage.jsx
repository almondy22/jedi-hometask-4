import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from ".././common/Table";
import { getStarships, starshipsColumns } from '../../services/starshipsService'

function StarshipsPage({starships, setStarships}) {
  useEffect(() => {
    const getData = async () => {
      const data = await getStarships()
      setStarships(data)
      localStorage.setItem("starshipsData", JSON.stringify(data))
    }
    if (!localStorage.starshipsData) {
      getData()
    } else {
      const data = localStorage.getItem("starshipsData")
      setStarships(JSON.parse(data))
    }
  }, [setStarships]);

  const handleDeleteItem = (itemId) => {
    const data = [...starships];
    data.splice(itemId, 1);
    setStarships(data);
    localStorage.setItem("starshipsData", JSON.stringify(data))
  }
  
  return (
      <main>
          <h1 className="main-header">Starships Page</h1>
          <Link to="/starships/new" className="btn btn-warning mb-4">
              New starship
          </Link>
          <Table
              data={starships}
              columns={starshipsColumns}
              tableDescriptor="Starship"
              onDeleteItem={handleDeleteItem}
              page="starships"
          />
      </main>
  );
}

export default StarshipsPage;
