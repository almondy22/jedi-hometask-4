import React from 'react';
import { Link } from 'react-router-dom';

function Table({columns, data, tableDescriptor, onDeleteItem, page}) {

  const handleDelete = (event) => {
    onDeleteItem(event.currentTarget.id - 1);
  }

  if (!data.length) return(
    <h4 className="main-header mt-3 mb-3">There is no information on this page!</h4>
  )

  return (
      <table className="table table-dark">
          <thead>
              <tr>
                  <th scope="col">{tableDescriptor}</th>
                  {columns.map((columnTitle) => (
                      <th key={columnTitle} scope="col">
                          {columnTitle}
                      </th>
                  ))}
              </tr>
          </thead>
          <tbody>
              {data.map((item, index) => (
                  <tr key={Math.random()}>
                      <th scope="row">{++index}</th>
                      {columns.map((columnTitle) =>
                          columnTitle === "Name" ? (
                              <td key={Math.random()}><Link to={`/${page}/${index}`} className="badge badge-dark">
                                  {item[columnTitle.toLowerCase()]}
                              </Link></td>
                          ) : (
                              <td key={Math.random()}>
                                  {item[columnTitle.toLowerCase()]}
                              </td>
                          )
                      )}
                      <td
                          id={index}
                          key={item.id}
                          className="delete-item"
                          onClick={(event) => handleDelete(event)}
                      >
                          &times;
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

export default Table;