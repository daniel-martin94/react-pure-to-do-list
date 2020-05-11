import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function NewToDo({ add }) {
  const [value, setValue] = useState("");

  const handleSubmit= e =>{
    e.preventDefault()
    if (!value ) return
    add(value)
    setValue("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default NewToDo;