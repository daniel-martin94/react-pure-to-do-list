import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ListItem from './ListItem'
import './style.css';

const App = () => {

  const [toDo, updateToDo] = useState([])

    return (
      <div>

        <ListItem title={"Hello World"}></ListItem> 
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
}

export default App