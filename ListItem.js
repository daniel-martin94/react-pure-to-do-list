import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const ListItem = (props) => {
  let { title, markCompleted, id, complete } = props
    return (
      <div>
        <div style={{ textDecoration: complete ? "line-through" : ""}}>{title}
          <input type="checkbox" onChange={() => markCompleted(id)}/>
        </div>
      </div>
    );
}

export default ListItem;