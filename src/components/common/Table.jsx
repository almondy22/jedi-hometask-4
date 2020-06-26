import React from 'react';
import {nanoid} from "nanoid";

function Table({columns, data, tableDescriptor, onDeleteItem, page}) {
  const renderCell = (item, column) => {
      return(
          column.content ? column.content(item) : item[column.colName]
      )
  }

  if (!data.length) return(
    <h4 className="main-header mt-3 mb-3">There is no information on this page!</h4>
  )

  return (
      <table className="table table-dark">
          <thead>
              <tr>
                  <th scope="col">{tableDescriptor}</th>
                  {columns.map((column) => (
                      <th key={nanoid()} scope="col">
                          {column.colName}
                      </th>
                  ))}
              </tr>
          </thead>
          <tbody>
              {data.map((item, index) => (
                  <tr key={nanoid()}>
                      <th scope="row">{++index}</th>
                      {columns.map((column) =>
                              <td key={nanoid()}>
                                  {renderCell(item, column)}
                              </td>
                      )}
                      <td
                          id={item.id}
                          key={nanoid()}
                          className="delete-item"
                          onClick={(event) => onDeleteItem(event.currentTarget.id)}
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
