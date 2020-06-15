import React from 'react';

function Table({columns, data, tableDescriptor, onDeleteItem}) {

  const handleDelete = (event) => {
    onDeleteItem(event.currentTarget.id - 1);
  }

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">{columnTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={Math.random()}>
            <th scope="row">{++index}</th>
            {columns.map((columnTitle) => (
              <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
            ))}
            <td id={index} key={item.id} className="delete-item" onClick={(event) => handleDelete(event)}>&times;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;