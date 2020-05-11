import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const ListItem = (props) => {
  let { title, updateTitle, id } = props
  console.log(updateTitle)
    return (
      <div>
        <input type="text" value={title} onChange={(e) => updateTitle(id, e)}/>
        <input type="checkbox"/>
      </div>
    );
}

export default ListItem;