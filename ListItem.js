import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const ListItem = (props) => {
  let { title } = props
    return (
      <div>
        <div>{title}</div>
      </div>
    );
}

export default ListItem