import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const ListItem = (props) => {
  let { title, markCompleted } = props
    return (
      <div>
        <div>{title}
          <input type="checkbox" onChange={markCompleted}/>
        </div>
      </div>
    );
}

export default ListItem;