import React, { useState } from 'react';
import Button from './Button'
import Input from './Input'

const Form = ({columns, initialData, onAddData}) => {
    const [personData, setPersonData] = useState(initialData)

    const handleClick = (event) => {
        event.preventDefault();
        onAddData(personData);
    }
    const handleChange = (event) => {
        const { currentTarget: input } = event;
        const data = {...personData};
        data[input.name] = input.value;
        setPersonData(data);
    }
    return (
      <form action="#">
        {columns.map((columnName) => (
          <Input
            key={columnName}
            name={columnName}
            label={columnName}
            value={personData[columnName]}
            type="input"
            onChange={(event) => handleChange(event)}
          />
        ))}
        <Button
          label="Save"
          classes="alert alert-danger"
          onClick={(event) => handleClick(event)}
        />
      </form>
    );
}

export default Form